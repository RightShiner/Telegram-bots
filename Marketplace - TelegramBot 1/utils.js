export async function fetchPair(pairAddress) {
    //blockchain = 'ethereum'
    //add pancakeswap
    const uniV3 = await fetchUniV3Pair(pairAddress)
    const uniV2 = await fetchUniV2Pair(pairAddress)

    if (uniV3) {return uniV3}
    if (uniV2) {return uniV2}
}

async function fetchUniV3Pair(pairAddress) {
    //const pairAddress = "0xcbcdf9626bc03e24f779434178a73a0b4bad62ed"
    let pair = null
    const subgraphUrl = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3'
    const query = `
      query Pool($poolId: ID!, $orderBy: PoolDayData_orderBy, $orderDirection: OrderDirection, $first: Int) {
        pool(id: $poolId) {
          id
          feeTier
          token0 {
            id
            name
            symbol
          }
          token1 {
            id
            name
            symbol
          }
          poolDayData(orderBy: $orderBy, orderDirection: $orderDirection, first: $first) {
            date
            volumeUSD
            token0Price
            token1Price
            volumeToken0
            volumeToken1
          }
        }
      }
    `
    const variables = {
        "poolId": pairAddress,
        "orderBy": "date",
        "orderDirection": "desc",
        "first": 30
    }

    const options = {
        "method": "POST",
        "body": JSON.stringify({
            query,
            variables
        })
    }

    const response = await fetch(subgraphUrl, options)
    const data = await response.json()
    if (data.errors) {console.log(`fetchUniV3Error: ${data.errors}`); return}
    if (data.data?.pool) {
        const volumes = data.data.pool.poolDayData.map(x => parseFloat(x.volumeUSD))
        //console.log(volumes)
        return {
            protocol: 'uniswap',
            version: 'v3',
            pairAddress: data.data.pool.id,
            token0: data.data.pool.token0.symbol,
            token1: data.data.pool.token1.symbol,
            feePercent: parseFloat(data.data.pool.feeTier) / 1e4,
            volumeLast: volumes[0],
            volume7dAvg: average(volumes.slice(0, 7)),
            volume30dAvg: average(volumes.slice(0, 30))
        }
    }
}

async function fetchUniV2Pair(pairAddress) {
    // 0x9928e4046d7c6513326ccea028cd3e7a91c7590a
    // 0xb14b9464b52f502b0edf51ba3a529bc63706b458
    const subgraphUrl = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';

    const query = `
      query Pair($pairId: ID!, $where: PairDayData_filter, $orderBy: PairDayData_orderBy, $orderDirection: OrderDirection, $first: Int) {
        pair(id: $pairId) {
          id
          token0 {
            id
            name
            symbol
          }
          token1 {
            id
            name
            symbol
          }
        }
        pairDayDatas(where: $where, orderBy: $orderBy, orderDirection: $orderDirection, first: $first) {
            date
            dailyVolumeUSD,
            dailyVolumeToken0,
            dailyVolumeToken0
        }
      }
    `
    const variables = {
        "pairId": pairAddress,
        "where": {"pairAddress": pairAddress},
        "orderBy": "date",
        "orderDirection": "desc",
        "first": 30
    }

    const options = {
        "method": "POST",
        "body": JSON.stringify({
            query,
            variables
        })
    }

    const response = await fetch(subgraphUrl, options)
    const data = await response.json()
    if (data.errors) {console.log(`fetchUniV2Error: ${data.errors}`); return}
    if (data.data?.pair) {
        const volumes = data.data.pairDayDatas.map(x => parseFloat(x.dailyVolumeUSD))
        //console.log(volumes)
        return {
            protocol: 'uniswap',
            version: 'v2',
            pairAddress: data.data.pair.id,
            token0: data.data.pair.token0.symbol,
            token1: data.data.pair.token1.symbol,
            feePercent: 0.3,
            volumeLast: volumes[0],
            volume7dAvg: average(volumes.slice(0, 7)),
            volume30dAvg: average(volumes.slice(0, 30))
        }
    }

}

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length

//await fetchUniV3Pair("0xcbcdf9626bc03e24f779434178a73a0b4bad62ed")
//await fetchUniV3Pair("0xnullcbcdf9626bc03e24f779434178a73a0b4null")
//const x = await fetchUniV3Pair("0xcbcdf9626bc03e24f779434178a73a0b4bad62ed")
//const x = await fetchUniV2Pair("0x9928e4046d7c6513326ccea028cd3e7a91c7590a")
// const x = await fetchPair("0x9928e4046d7c6513326ccea028cd3e7a91c7590a")
// console.log(x)
