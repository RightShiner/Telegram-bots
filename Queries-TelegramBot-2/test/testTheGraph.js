
const {execute} = require("../.graphclient")
const { getCeloPrice } = require("../lib/TheGraph")
const { poolVolumeQuery } = require("../utils/celoQueries")
const calculateTransactionValue = require("../utils/calculateTxValue")
const { getTradeAmounAndCount, getTotalPoolVolume } = require("../lib/Bitquery")
const getClientIds = require("../utils/getClientIds")
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

  // const getGasCost = async () => {
  //   const celoPrice = await getCeloPrice("18330769")
  //   return await calculateTransactionValue(
  //     parseInt(700000),
  //     parseInt(100000000000),
  //     celoPrice
  //   )
  // }
  // const result = await getGasCost()
  // console.log(result)

  const poolVolume = await getTotalPoolVolume("0xb14b9464b52f502b0edf51ba3a529bc63706b458", "2023-02-10", "2023-02-14")
  console.log(poolVolume)

  console.log(getClientIds())
  // const result = await getTradeAmounAndCount(["0xa5Cf4DDFe4BfDbE712bD2f54EAadaCebb809fAED"], "2022-01-01", "2023-03-01")
  // console.log(result)

  // const result = await execute(poolVolumeQuery, variables)
  // // `result` is fully typed!
  // console.log(JSON.stringify(result, null, 2))
}

main()