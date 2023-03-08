This is a JavaScript module that uses the Axios library to make HTTP requests to various GraphQL endpoints in order to retrieve data related to blockchain transactions on the Ethereum network.

The code exports several functions:

axiosConfig(props): sets default configuration options for Axios library. It sets the default timeout for requests, base URL, and headers such as X-API-KEY and Content-Type.

getTokenStartBalance(token, accountAddress, startDate): retrieves the starting balance of a given token for a given account address as of a specified start date. It sends a GraphQL query to the Pancakeswap v2 endpoint to fetch this data.

getPairAddressByGraphQL(token1, token2): retrieves the address of a token pair on the Binance Smart Chain (BSC) DEX. It sends a GraphQL query to the BSC DEX endpoint to fetch this data.

getLatestPriceOfToken(tokenAddress): retrieves the latest price of a token on Pancakeswap v2. It sends a GraphQL query to the Pancakeswap v2 endpoint to fetch this data.

getFirstBlock(accountAddress): retrieves the block height of the first block in which a given account address appears as the transaction sender. It sends a GraphQL query to the Ethereum endpoint to fetch this data.

getTxnsCount(accountAddresses, afterDate, beforeDate, chainConfig): retrieves the number of transactions that occurred on the Ethereum network between two specified dates for a given list of account addresses. It sends a GraphQL query to the Ethereum endpoint to fetch this data.

getGasFee(accountAddresses, afterDate, beforeDate, chainConfig): retrieves the total gas fee paid by a given list of account addresses for transactions that occurred on the Ethereum network between two specified dates. It sends a GraphQL query to the Ethereum endpoint to fetch this data.

Most of these functions utilize Axios to make HTTP requests to GraphQL endpoints and parse the JSON data in the response. Some of them also use external configuration options to set the request timeout, API key, and other headers. The functions return various values, such as the token start balance, token pair address, latest token price, block height, transaction count, and gas fee.

It is important to note that the implementation of the functions getFirstBlock, getTxnsCount, and getGasFee rely on several helper functions and variables that are not defined in the code snippet. These include getNetworkParams, chainConfig, networkConfig, and generalConfig. These functions and variables are presumably defined in other modules that are imported into this module.
