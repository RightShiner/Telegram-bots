const flVolumeAndGasFeeAndTxnsQuery = `
    query getFlVolumeAndGasFeeAndTxns($addresses: [String!], $start: ISO8601DateTime!, $end: ISO8601DateTime!) {
      ethereum(network: ethereum) {
        dexTrades(
          date: {between: [$start, $end]}
          txSender: {in: $addresses}
          exchangeName: {in: ["Uniswap", "Uniswap v2"]}
        ) {
          tradeAmount(in: USD)
          gasValue(in: USD)
          count
        }
      }
    }
  `

const totalPoolVolumeQuery = `
    query getTotalPoolVolume($pool: String!, $start: ISO8601DateTime!, $end: ISO8601DateTime!) {
      ethereum(network: ethereum) {
        dexTrades(
          date: {between: [$start, $end]}
          exchangeName: {in: ["Uniswap", "Uniswap v2"]}
          smartContractAddress: {is: $pool}
        ) {
          tradeAmount(in: USD)
        }
      }
    }
  `

const botVolumeQuery = `
  query getVolume($addresses: [String!], $tokens: [String!], $start: ISO8601DateTime!, $end: ISO8601DateTime!){
      ethereum(network: ethereum) {
        buy: dexTrades(
          exchangeName: {in: ["Uniswap", "Uniswap v2"]}
          txSender: {in: $addresses}
          buyCurrency: {in: $tokens}
          date: {between: [$start, $end]}
        ) {
          tradeAmount(in: USD)
        }
        sell: dexTrades(
					exchangeName: {in: ["Uniswap", "Uniswap v2"]}
          txSender: {in: $addresses}
          sellCurrency: {in: $tokens}
          date: {between: [$start, $end]}
        ) {
          tradeAmount(in: USD)
        }
      }
    }
`



module.exports = {
  flVolumeAndGasFeeAndTxnsQuery,
  botVolumeQuery,
  totalPoolVolumeQuery
}