A Telegram bot is a program that runs on the Telegram platform and interacts with users through the messaging app. The bot can be programmed to perform various tasks, such as responding to user queries, providing information, or automating processes. This telegram bot contains a TheGraph script that is used to perform accounting for certain timeframes of a cluster of Blockchain wallets that traded in a given DEX protocol.

Should we hardcode pair address or token0, token1? 
Due to the high volumen of tx and wallets, the script often taken several minutos to provide the output. We need to show the user that the bot is actually querying and it doesnt crash. 

The user should not be able to add or register a new pair. All pools variables are hardcoded in "index.js" or any other separated file.

This is an Output example

![ngfngfn](https://user-images.githubusercontent.com/83619829/226024998-07b9bbaf-8309-41df-9990-379e69cdd8a1.jpg)

The full script in Bitquery.js can be pruned to only perform queries for a group of hardcoded variables. If a hardcoded variable changes (for example a second pool for thesame client) we will deploy a new bot for it. 

The extracted data is used to perform accounting for a cluster of Wallets that have traded on that protocol during a certain timeframe. The accounting process involves tracking the inflow and outflow of funds in the wallets and calculating the net volumen for each wallet.

About the Query Script: This is a JavaScript module that uses the Axios library to make HTTP requests to various GraphQL endpoints in order to retrieve data related to blockchain transactions on a given Blockchain. 

Most of these functions utilize Axios to make HTTP requests to GraphQL endpoints and parse the JSON data in the response. Some of them also use external configuration options to set the request timeout, API key, and other headers. The functions return various values, such as the token start balance, token pair address, latest token price, block height, transaction count, and gas fee.

It is important to note that the implementation of the functions getFirstBlock, getTxnsCount, and getGasFee rely on several helper functions and variables that are not defined in the code snippet. These include getNetworkParams, chainConfig, networkConfig, and generalConfig. These functions and variables was originaly defined in other file. This is because this script was made to retrive the info from a clients database, by prompting a frontend environment. 
