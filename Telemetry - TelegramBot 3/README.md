        ## Daily Volume Alarm Bot 

This is a Telegram bot that allows users to monitor maximum and minimum daily volume notifications for a certain DEX pool pair using theGraph API. The bot is built using Node.js, Telegraf, Axios. 

When /StartBot, the bot checks the volume for each DEX Pool. The bot will send you a notification if the volume for that pair exceeds your set maximum or falls below your set minimum.

The user should not be able to add or register a new pair. All pools variables are hardcoded in "index.js" or any other separated file. 

 ## Prerequisites

Before you can use this bot, you will need to do the following: Create a Telegram bot using BotFather. 
Obtain an API key from TheGraph. 
Install Node.js and npm on your machine. 
Install the required packages using npm install. 
Create a .env / gitignore file in the root directory of the project and add your Telegram bot token and CoinMarketCap API key as follows

 ## Tests

Start the bot using "node index.js" 
Send the /start command to begin.
Add the bot to any telegram group to start receiving volumen notifications. 

 ## Contributing

If you would like to contribute to this project, please follow these steps:

-Make your changes and commit them with clear, concise messages. 
-Push your changes to dev branch. 
-Submit a pull request to this repository with a description of your changes.


 ## Adding new pools

At Scheme.js file easily add or delete pools
```
const pairs = [
    {
        Name: "Xcre/USDC",
        Exchange: "UniSwap v3",
        Blockchain: "Polygon",
        Pool: "0x32c936874ff276c626a9ed028faa10071e3a2fac",
        Min: 1000,
        Max: 3000
    },
    {
        Name: "Ethix/Eth",
        Exchange: "UniSwap v2",
        Blockchain: "Ethereum",
        Pool: "0xb14b9464b52f502b0edf51ba3a529bc63706b458",
        Min: 1000,
        Max: 10000
    },
    {
        Name: "Ethix/Cusd",
        Exchange: "UniSwap v3",
        Blockchain: "Celo",
        Pool: "0x3420720e561f3082f1e514a4545f0f2e0c955a5d",
        Min: 5000,
        Max: 21000
    },   
]
```