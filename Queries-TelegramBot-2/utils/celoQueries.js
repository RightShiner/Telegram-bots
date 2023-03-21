const poolVolumeQuery = `
  query getPoolVolume($start: String!, $end: String!) {
    liquidityPool(id: "0x3420720e561f3082f1e514a4545f0f2e0c955a5d") {
      name
      dailySnapshots(where: {timestamp_gte: $start, timestamp_lte: $end}) {
        day
        timestamp
        dailyTotalVolumeUSD
      }
    }
  }
`
const botVolumeAndGasFeeQuery = `
  query botVolumeQuery($addresses: [String!], $start: String!, $end: String!) {
    liquidityPool(id: "0x3420720e561f3082f1e514a4545f0f2e0c955a5d") {
      name
      swaps(first: 1000, where: {account_in: $addresses, timestamp_gte: $start, timestamp_lte: $end}){
          amountInUSD
          amountOutUSD
          timestamp
          blockNumber
          gasLimit
          gasPrice
      }
    }
  }
`
const celoPriceByBlockQuery = `
  query celoPriceByBlockQuery($blockNumber: Int!) {
    token(id: "0x471ece3750da237f93b8e339c536989b8978a438", block: {number: $blockNumber}) {
      lastPriceUSD
    }
  }
`

module.exports = {
  poolVolumeQuery,
  botVolumeAndGasFeeQuery,
  celoPriceByBlockQuery,
}