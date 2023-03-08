This is a code snippet written in JavaScript that uses the Axios library to make HTTP requests to a GraphQL API endpoint for interacting with a blockchain network. The code defines several functions for fetching information from the blockchain network such as token balances, token prices, transaction counts, and gas fees.

The axiosConfig function sets up default configuration options for Axios, including the base URL, timeout, and headers for authentication and content type.

The getTokenStartBalance function queries the GraphQL endpoint to retrieve the balance of a specified token held by a specific account at a given point in time.

The getPairAddressByGraphQL function fetches the pair ID for two specified tokens on a decentralized exchange, which can be used to retrieve the current price of the token pair.

The getLatestPriceOfToken function retrieves the latest price of a specified token in US dollars.

The getFirstBlock function fetches the first block on the blockchain that was mined by a specified account.

The getTxnsCount function retrieves the number of transactions made by a list of specified accounts on the blockchain network within a specified time range.

The getGasFee function retrieves the total gas fees paid by a list of specified accounts for their transactions on the blockchain network within a specified time range.

Overall, this code is designed to facilitate the querying of a blockchain network through a GraphQL API endpoint and to provide useful information for blockchain data analysis and research.
