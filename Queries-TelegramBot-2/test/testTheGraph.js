
const {execute} = require("../.graphclient")
const { getCeloPrice } = require("../lib/TheGraph")
const { poolVolumeQuery } = require("../utils/uniswapV3Celo")
const calculateTransactionValue = require("../utils/calculateTxValue")
const getCeloPriceByDate = require("../utils/getCeloPriceByDate")
const timeStampToDateString = require("../utils/timeStampToDateString")
async function main() {
  const variables = {
    start: "1675983600",
    end: "1676329200",
  }
  // console.log(timeStampToDateString(variables.start))
  // const resp = await getCeloPriceByDate(variables.start)
  // console.log(resp)
  // const price = await getCeloPrice("18330769")
  // console.log(price)

  const getGasCost = async () => {
    const celoPrice = await getCeloPrice("18330769")
    return await calculateTransactionValue(
      parseInt(700000),
      parseInt(100000000000),
      celoPrice
    )
  }
  const result = await getGasCost()
  console.log(result)
  // const result = await execute(poolVolumeQuery, variables)
  // // `result` is fully typed!
  // console.log(JSON.stringify(result, null, 2))
}

main()