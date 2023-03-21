
const { execute } = require("../.graphclient")
const { poolVolumeQuery, botVolumeAndGasFeeQuery, celoPriceByBlockQuery } = require("../utils/celoQueries")
const calculateTransactionValue = require("../utils/calculateTxValue")

async function getPoolVolume(start, end) {
  try {
    const { data } = await execute(poolVolumeQuery, {
      start,
      end
    })

    if (!(data.liquidityPool.dailySnapshots.length > 0)) {
      return 0
    }
    const volumesArray = data.liquidityPool.dailySnapshots.map(snapshot => parseFloat(snapshot.dailyTotalVolumeUSD))
    return volumesArray.reduce((a, b) => a + b, 0);

  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}

async function getBotVolumeAndGasFee(addresses, start, end) {
  try {
    const { data } = await execute(botVolumeAndGasFeeQuery, {
      addresses,
      start,
      end
    })
    if (!(data.liquidityPool.swaps.length > 0)) {
      return 0
    }
    const swapArray = data.liquidityPool.swaps
    const celoPriceOnSwapArrayPromises = swapArray.map(swap => getCeloPrice(parseInt(swap.blockNumber)))
    const celoPriceOnSwapArray = await Promise.all(celoPriceOnSwapArrayPromises)
    const gasUsedInUsdPromises = swapArray.map((swap, i) => calculateTransactionValue(parseInt(swap.gasLimit), parseInt(swap.gasPrice), celoPriceOnSwapArray[i]))

    const gasUsedInUsd = await Promise.all(gasUsedInUsdPromises)
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return {
      botVolume: swapArray.map(swap => 
        parseFloat(swap.amountInUSD) + parseFloat(swap.amountOutUSD)
      ).reduce((a, b) => a + b, 0),
      gasUsedInUsd: gasUsedInUsd.filter((gas) => gas > 0).reduce((a, b) => a + b, 0),
    }
  } catch (error) {
    console.log(error)
    throw new Error("error on getBotVolume call")
  }
}

// async function getGasFee(addresses, start, end) {
//   try {
//     const { data } = await execute(gasFeeQuery, {
//       addresses,
//       start,
//       end
//     })
//     const swapsArray = data.liquidityPool.swaps
//     const celoPriceOnSwapArrayPromises = swapsArray.map(swap => getCeloPrice(parseInt(swap.blockNumber)))
//     const celoPriceOnSwapArray = await Promise.all(celoPriceOnSwapArrayPromises)
//     const gasUsedInUsdPromises = swapsArray.map((swap, i) => calculateTransactionValue(parseInt(swap.gasLimit), parseInt(swap.gasPrice), celoPriceOnSwapArray[i]))

//     const gasUsedInUsd = await Promise.all(gasUsedInUsdPromises)
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     return gasUsedInUsd.filter((gas) => gas > 0).reduce((a, b) => a + b, 0)

//   } catch (error) {
//     console.log(error)
//     throw new Error("error on getGasFee call")
//   }
  
// }

async function getCeloPrice(blockNumber) {
  try {
    const { data } = await execute(celoPriceByBlockQuery, { blockNumber })
    if (!data.token) {
      throw new Error("error data.token undefined")
    }
    return parseFloat(data.token.lastPriceUSD)


  } catch (error) {
    console.log(error)
    throw new Error("error on getCeloPrice call")
  }
}

module.exports = {
  getPoolVolume,
  getBotVolumeAndGasFee,
  getCeloPrice
}