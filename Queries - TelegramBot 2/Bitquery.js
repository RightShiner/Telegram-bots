const axios = require("axios");
const { generalConfig, networkConfig } = require("../../config/config");

const axiosConfig = (props = {}) => {
   const { timeout = 3600000 } = props;
   axios.defaults.baseURL = generalConfig.graphQLEndpoint;
   axios.defaults.timeout = timeout;
   axios.defaults.headers.common["X-API-KEY"] = generalConfig.bitqueryAPIKey;
   axios.defaults.headers.common["Content-Type"] = "application/json";
};

const getTokenStartBalance = async (token, accountAddress, startDate) => {
   const query = `
  {
    ${token} {
      address(address: {is: "${accountAddress}"}){
        balances(
        date: {before: "${startDate}"}
        ) {
  
         value
          currency {
            symbol
          }
        }
      }
    }
  }
  `;

   const response = await axios({
      url: networkConfig.pancakeswapV2GraphQLEndpoint,
      method: "post",
      data: { query: query },
   });
};

const getPairAddressByGraphQL = async (token1, token2) => {
   const query = `
    {
        pairs(first: 10, where: { token0: "${token1.toLowerCase()}", token1: "${token2.toLowerCase()}" }) {
            id
        }
    }
    `;
   const response = await axios({
      //url: networkConfig.pancakeswapV2GraphQLEndpoint,
      url: generalConfig["bsc"]["dexGraphQLEndpoint"],
      method: "post",
      data: { query: query },
   });
   console.log("token1", token1);
   console.log("token2", token2);
   console.log("responseeee", response);

   if (response.status !== 200) {
      console.error("Failed to fetch price");
      return null;
   }

   if (response.data.data.pairs.length === 0) {
      return null;
   }

   return response.data.data.pairs[0].id;
};

const getLatestPriceOfToken = async (tokenAddress) => {
   const query = `
    {
      token(id: "${tokenAddress}") {
        derivedUSD
      }
    }
    `;

   const response = await axios({
      url: networkConfig.pancakeswapV2GraphQLEndpoint,
      method: "post",
      data: { query: query },
   });

   if (response.status !== 200) {
      console.error("Failed to fetch price");
      return 0;
   }

   return response.data.data.token.derivedUSD;
};

const getFirstBlock = async (accountAddress, chainConfig) => {
   axiosConfig();
   const params = getNetworkParams(chainConfig.abbrevation);
   const query = `
    {
    ethereum(network: ${params.network}) {
    transactions(
      txSender: {is: "${accountAddress}"}
      success: true
      options: {limit: 1}
    ) {
      block {
        height
      }
    }
  }
    }
    `;
   const response = await axios.post("", { query: query });
   if (response.status !== 200) {
      console.error("Failed to fetch volume");
      return null;
   }
   if (typeof response.data.data === "undefined") {
      console.error("Failed to request");
      return 0;
   }
   if (!response.data.data.ethereum.transactions) {
      return 0;
   }
   if (response.data.data.ethereum.transactions.length === 0) {
      return 0;
   }
   return response.data.data.ethereum.transactions[0].block?.height;
};

const getTxnsCount = async (
   accountAddresses,
   afterDate = "0000-01-01",
   beforeDate = new Date().toISOString(),
   chainConfig
) => {
   axiosConfig();
   const firstBlock = await getFirstBlock(accountAddresses[0], chainConfig);
   const params = getNetworkParams(chainConfig.abbrevation);
   if (!firstBlock || firstBlock <= 0) return 0;
   const query = `
    query getVolume($accountAddresses: [String!]) {
      ethereum(network: ${params.network}) {
        dexTrades(
          ${params.exchange}
          date: {between: ["${afterDate}", "${beforeDate}"]}
          txSender: {in: $accountAddresses}
        ) {
          count
        }
      }
    }
    `;
   const variables = {
      accountAddresses: accountAddresses,
   };
   const response = await axios.post("", { query: query, variables: variables });
   if (response.status !== 200) {
      console.error("Failed to fetch volume");
      return 0;
   }
   if (typeof response.data.data === "undefined") {
      console.error("Failed to request");
      return 0;
   }
   if (!response.data.data.ethereum.dexTrades) {
      console.error("Failed to request");
      return 0;
   }
   return response.data.data.ethereum.dexTrades[0].count;
};

const getGasFee = async (accountAddresses, afterDate = "0000-01-01", beforeDate = new Date().toISOString(), chainConfig) => {
   axiosConfig();
   const firstBlock = await getFirstBlock(accountAddresses[0], chainConfig);
   if (!firstBlock || firstBlock <= 0) return 0;
   const params = getNetworkParams(chainConfig.abbrevation);
   const query = `
    query getVolume($accountAddresses: [String!]) {
      ethereum(network: ${params.network}) {
        dexTrades(
         ${params.exchange}
          date: {between: ["${afterDate}", "${beforeDate}"]}
          txSender: {in: $accountAddresses}
        ) {
          gasValue(in: USD)
        }
      }
    }
    `;
   const variables = {
      accountAddresses: accountAddresses,
   };
   const response = await axios.post("", { query: query, variables: variables });
   if (response.status !== 200) {
      console.error("Failed to fetch volume");
      return 0;
   }
   if (typeof response.data.data === "undefined") {
      console.error("Failed to request");
      return 0;
   }
   if (!response.data.data.ethereum.dexTrades) {
      console.error("Failed to request");
      return 0;
   }
   return response.data.data.ethereum.dexTrades[0].gasValue;
};

const getVolumeOfAccountsTokensInTxns = async (
   accountAddresses,
   tokenAddresses,
   afterDate = "0000-01-01",
   beforeDate = new Date().toISOString(),
   chainConfig
) => {
   axiosConfig();
   const firstBlock = await getFirstBlock(accountAddresses[0], chainConfig);
   if (!firstBlock || firstBlock <= 0) return 0;
   const params = getNetworkParams(chainConfig.abbrevation);
   const query = `
    query getVolume($accountAddresses: [String!], $tokenAddresses: [String!]){
      ethereum(network: ${params.network}) {
        buy: dexTrades(
          ${params.exchange}
          txSender: {in: $accountAddresses}
          buyCurrency: {in: $tokenAddresses}
          date: {between: ["${afterDate}", "${beforeDate}"]}
        ) {
          tradeAmount(in: USD)
        }
        sell: dexTrades(
          ${params.exchange}
          txSender: {in: $accountAddresses}
          sellCurrency: {in: $tokenAddresses}
          date: {between: ["${afterDate}", "${beforeDate}"]}
        ) {
          tradeAmount(in: USD)
        }
      }
    }
    `;
   const variables = {
      accountAddresses: accountAddresses,
      tokenAddresses: tokenAddresses,
   };
   const response = await axios.post("", { query: query, variables: variables });
   if (response.status !== 200) {
      console.error("Failed to fetch volume");
      return 0;
   }

   let aggregatedVolume = 0;

   if (typeof response.data.data === "undefined") {
      console.error("Failed to request");
      return 0;
   }

   if (!response.data.data.ethereum.buy || !response.data.data.ethereum.sell) {
      console.error("Failed to request");
      return 0;
   }

   if (response.data.data.ethereum.buy.length !== 0) {
      aggregatedVolume += response.data.data.ethereum.buy[0].tradeAmount;
   }

   if (response.data.data.ethereum.sell.length !== 0) {
      aggregatedVolume += response.data.data.ethereum.sell[0].tradeAmount;
   }
   return aggregatedVolume;
};

const getVolumeOfAccountsInTxns = async (
   accountAddresses,
   afterDate = "0000-01-01",
   beforeDate = new Date().toISOString(),
   chainConfig
) => {
   axiosConfig();
   const firstBlock = await getFirstBlock(accountAddresses[0], chainConfig);
   if (!firstBlock || firstBlock <= 0) return 0;
   const params = getNetworkParams(chainConfig.abbrevation);
   const query = `
    query getVolume($accountAddresses: [String!]) {
      ethereum(network: ${params.network}) {
        dexTrades(
         ${params.exchange}
          date: {between: ["${afterDate}", "${beforeDate}"]}
          txSender: {in: $accountAddresses}
        ) {
          tradeAmount(in: USD)
        }
      }
    }
    `;
   const variables = {
      accountAddresses: accountAddresses,
   };
   const response = await axios.post("", { query: query, variables: variables });
   if (response.status !== 200) {
      console.error("Failed to fetch volume");
      return 0;
   }
   if (typeof response.data.data === "undefined") {
      console.error("Failed to request");
      return 0;
   }
   if (!response.data.data.ethereum.dexTrades) {
      console.error("Failed to request");
      return 0;
   }

   if (response.data.data.ethereum.dexTrades.length !== 0) {
      return response.data.data.ethereum.dexTrades[0].tradeAmount;
   }

   return 0;
};

const getVolumeOfTokensInTxns = async (
   tokenAddresses,
   afterDate = "0000-01-01",
   beforeDate = new Date().toISOString(),
   chainConfig
) => {
   axiosConfig();
   const params = getNetworkParams(chainConfig.abbrevation);
   const query = `
    query getVolume($tokenAddresses: [String!]) {
      ethereum(network: ${params.network}) {
        buy: dexTrades(
         ${params.exchange}
          buyCurrency: {in: $tokenAddresses}
          date: {between: ["${afterDate}", "${beforeDate}"]}
        ) {
          tradeAmount(in: USD)
        }
        sell: dexTrades(
         ${params.exchange}
          sellCurrency: {in: $tokenAddresses}
          date: {between: ["${afterDate}", "${beforeDate}"]}
        ) {
          tradeAmount(in: USD)
        }
      }
    }
    `;
   const variables = {
      tokenAddresses: tokenAddresses,
   };
   const response = await axios.post("", { query: query, variables: variables });
   if (response.status !== 200) {
      console.error("Failed to fetch volume");
      return 0;
   }

   let aggregatedVolume = 0;
   if (typeof response.data.data === "undefined") {
      console.error("Failed to request");
      return 0;
   }
   if (!response.data.data.ethereum.buy || !response.data.data.ethereum.sell) {
      console.error("Failed to request");
      return 0;
   }

   if (response.data.data.ethereum.buy.length !== 0) {
      aggregatedVolume += response.data.data.ethereum.buy[0].tradeAmount;
   }

   if (response.data.data.ethereum.sell.length !== 0) {
      aggregatedVolume += response.data.data.ethereum.sell[0].tradeAmount;
   }
   return aggregatedVolume;
};

const getVolumeOfPoolsInTxns = async (
   poolAddresses,
   afterDate = "0000-01-01",
   beforeDate = new Date().toISOString(),
   chainConfig
) => {
   axiosConfig();
   const params = getNetworkParams(chainConfig.abbrevation);
   const query = `
    query getVolume($poolAddresses: [String!]) {
      ethereum(network: ${params.network}) {
        dexTrades(
         ${params.exchange}
          date: {between: ["${afterDate}", "${beforeDate}"]}
          smartContractAddress: {in: $poolAddresses}
        ) {
          tradeAmount(in: USD)
        }
      }
    }
    `;
   const variables = {
      poolAddresses: poolAddresses,
   };
   const response = await axios.post("", { query: query, variables: variables });
   if (response.status !== 200) {
      console.error("Failed to fetch volume");
      return 0;
   }

   if (typeof response.data.data === "undefined") {
      console.error("Failed to request");
      return 0;
   }

   if (!response.data.data.ethereum?.dexTrades) {
      console.error("Failed to request");
      return 0;
   }

   if (response.data.data.ethereum.dexTrades.length === 0) return 0;

   return response.data.data.ethereum.dexTrades[0].tradeAmount;
};

const getFlashloanVolumen = async (addresses, afterDate, beforeDate, chainConfig) => {
   axiosConfig();
   const params = getNetworkParams(chainConfig.abbrevation);
   const query = `
   query getVolume($accountAddresses: [String!]) {
      ethereum(network: ${params.network}) {
        dexTrades(
        ${params.exchange}
          date: {between: ["${afterDate}", "${beforeDate}"]}
          txSender: {in: $accountAddresses}
        ) {
          tradeAmount(in: USD)
        }
      }
    }
   `;
   const variables = {
      accountAddresses: addresses,
   };
   const response = await axios.post("", { query: query, variables: variables });
   if (response.status !== 200) {
      console.error("Failed to fetch volume");
      return 0;
   }
   if (typeof response.data.data === "undefined") {
      console.error("Failed to request");
      return 0;
   }
   if (!response.data.data.ethereum.dexTrades) {
      console.error("Failed to request");
      return 0;
   }

   if (response.data.data.ethereum.dexTrades.length !== 0) {
      return response.data.data.ethereum.dexTrades[0].tradeAmount;
   }

   return 0;
};

const getNetworkParams = (chainConfig) => {
   let params = {
      network: "",
      exchange: "",
   };

   switch (chainConfig) {
      case "bsc":
         params.exchange = `exchangeName: {in: ["Pancake", "Pancake v2"]}`;
         params.network = "bsc";
         break;
      case "polygon":
         params.exchange = `protocol: {is: "Uniswap v3"}`;
         params.network = "matic";
         break;
      case "eth":
         params.exchange = `exchangeName: {in: ["Uniswap", "Uniswap v2"]}`;
         params.network = "ethereum";
      default:
         break;
   }
   return params;
};

module.exports = {
   getTokenStartBalance,
   getTxnsCount,
   getGasFee,
   getVolumeOfAccountsInTxns,
   getVolumeOfAccountsTokensInTxns,
   getVolumeOfTokensInTxns,
   getVolumeOfPoolsInTxns,
   getPairAddressByGraphQL,
   getFlashloanVolumen,
};
