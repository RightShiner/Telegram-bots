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
