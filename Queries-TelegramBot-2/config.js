const generalConfig = {
  bitqueryGraphQlUrl: "https://graphql.bitquery.io",
  theGraphApiUrl: "https://gateway.thegraph.com/api",
  subgraphUniswapCelo: "/subgraphs/id/9nh6Ums63wFcoZpmegyPcAFtY3CAzQc3S6cuERALYMqa"
}
const networkConfig = {}

const testConstants = {
  tokens: {
    ethereum: {
      weth: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      ethix: "0xFd09911130e6930Bf87F2B0554c44F400bD80D3e".toLowerCase(),
    },
    celo: {
      native: "0x471ece3750da237f93b8e339c536989b8978a438"
    },
    polygon: {

    }
  },
  pools: {
    ethereum: {
      uniswap: {
        'Ethix/Wrappred Ether': "0xb14b9464b52f502b0edf51ba3a529bc63706b458"
      }
    },
    celo: {
      uniswap: {
        'Celo Dollar/Ethix (Wormhole)': "0x3420720e561f3082f1e514a4545f0f2e0c955a5d"
      }
    },
    polygon: {
      uniswap: {
        '': ""
      }
    }
  }
}

module.exports = { generalConfig, networkConfig, testConstants }



