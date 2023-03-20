
const { execute } = require("../.graphclient")
const { poolVolumeQuery, botVolumeQuery, gasFeeQuery, celoPriceByBlockQuery } = require("../utils/uniswapV3Celo")
const calculateTransactionValue = require("../utils/calculateTxValue")
const getCeloPriceByDate = require("../utils/getCeloPriceByDate")
const { formatUnits, parseEther, formatEther } = require("@ethersproject/units")
const { parse } = require("dotenv")
async function getPoolVolume(start, end) {
  try {
    const { data } = await execute(poolVolumeQuery, { start, end })

    if (!(data.liquidityPool.dailySnapshots.length > 0)) {
      return 0
    }
    const volumesArray = data.liquidityPool.dailySnapshots.map(snapshot => parseFloat(snapshot.dailyTotalVolumeUSD))
    return volumesArray.reduce((a, b) => a + b, 0);

  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}

async function getBootVolume(addresses, start, end) {
  try {
    const { data } = await execute(botVolumeQuery, { addresses, start, end })
    if (!(data.liquidityPool.swaps.length > 0)) {
      return 0
    }
    const swapArray = data.liquidityPool.swaps

    const totalVolumeBySwap = swapArray.map(swap => parseFloat(swap.amountInUSD) + parseFloat(swap.amountOutUSD))
    return totalVolumeBySwap.reduce((a, b) => a + b, 0)
  } catch (error) {
    console.log(error)
    throw new Error("error on getBotVolume call")
  }
}

async function getGasFee(addresses, start, end) {
  try {
    const { data } = await execute(gasFeeQuery, { addresses, start, end })
    const swapsArray = data.liquidityPool.swaps
    const celoPriceOnSwapArrayPromises = swapsArray.map(swap => getCeloPrice(swap.blockNumber))
    const celoPriceOnSwapArray = await Promise.all(celoPriceOnSwapArrayPromises)
    const gasUsedInUsdPromises = swapsArray.map((swap, i) => calculateTransactionValue(parseInt(swap.gasLimit), parseInt(swap.gasPrice), celoPriceOnSwapArray[i]))

    const gasUsedInUsd = await Promise.all(gasUsedInUsdPromises)
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return gasUsedInUsd.filter((gas) => gas > 0).reduce((a, b) => a + b, 0)
    // return gasUsedArray
    // console.log(gasUsedArray)
    // return 0
  } catch (error) {
    console.log(error)
    throw new Error("error on getGasFee call")
  }
  // try {
  //   const executeQueriesPromises = addresses.map(address => execute(gasFeeQuery, { address, start, end }));
  //   const executeQueries = await Promise.all(
  //     executeQueriesPromises.map(async (promise) => {
  //       const result = await promise;
  //       await new Promise((resolve) => setTimeout(resolve, 200));
  //       return result;
  //     })
  //   )
  //   const swapsArray = executeQueries.map(result => result.data.liquidityPool.swaps)


  //   const gasUsedArray = await Promise.all(
  //     swapsArray.map(async (swaps) => {
  //       if (!(swaps.length > 0)) {
  //         return 0
  //       }
  //       const celoPriceOnSwapArrayPromises = swapsArray.map(swap => getCeloPrice(swap.blockNumber))
  //       const celoPriceOnSwapArray = await Promise.all(celoPriceOnSwapArrayPromises)
  //       const gasUsedInUsdPromises = swapsArray.map((swap, i) => calculateTransactionValue(parseInt(swap.gasLimit), parseInt(swap.gasPrice), celoPriceOnSwapArray[i]))

  //       const gasUsedInUsd = await Promise.all(gasUsedInUsdPromises)
  //       await new Promise((resolve) => setTimeout(resolve, 5000));
  //       return gasUsedInUsd.reduce((a, b) => a + b, 0)
  //     })
  //   )
  //   // console.log('data.liquidityPool.swaps.length', data.liquidityPool.swaps.length)

  //   // console.log('arre', data.liquidityPool)
  //   // console.log(swapArray.slice(0, 100))
  //   // console.log(swapArray.length)
  //   // const celoPriceOnSwapArrayPromises = swapArray.map(swap => getCeloPrice(swap.blockNumber))
  //   // const celoPriceOnSwapArray = await Promise.all(celoPriceOnSwapArrayPromises)
  //   // const gasUsedInUsd = await Promise.all(gasUsedInUsdPromises)
  //   // console.log('gasUsedInUsd', gasUsedInUsd.reduce((a, b) => a + b, 0))
  //   // return gasUsedInUsd
  //   return gasUsedArray.filter((gasUsed) => gasUsed > 0).reduce((a, b) => a + b, 0)
  // } catch (error) {
  //   console.log(error)
  //   throw new Error("error on getGasFee call")
  // }
}

async function getCeloPrice(blockNumber) {
  try {
    const { data } = await execute(celoPriceByBlockQuery, { blockNumber: parseInt(blockNumber) })
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
  getBootVolume,
  getCeloPrice,
  getGasFee
}