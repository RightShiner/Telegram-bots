Telegram Volume Alarm Bot
This is a Telegram bot that allows users to set maximum and minimum volume alarms for a certain dex pool pair using the CoinMarketCap API. The bot is built using Node.js, Telegraf, Axios, and the CoinMarketCap API.

This code sets up a Telegram bot that allows users to set maximum and minimum volume alarms for a certain cryptocurrency pair using the CoinMarketCap API. When a user sets an alarm, the bot stores the maximum and minimum volume for that pair in an object called volumeAlarms. The bot then checks the volume for each cryptocurrency pair

We're using Telegraf's scene feature to prompt the user for the pool and range details. We're also using inline keyboards to let the user choose the router and blockchain options.

Of course, you'll need to implement the savePool and saveVolumeRange functions to save the data to a database or file.

*Prerequisites*

Before you can use this bot, you will need to do the following:
Create a Telegram bot using BotFather.
Obtain an API key from CoinMarketCap.
Install Node.js and npm on your machine.
Install the required packages using npm install.
Create a .env file in the root directory of the project and add your Telegram bot token and CoinMarketCap API key as follows

*Tests*

Start the bot using node telemetry.js 
Open Telegram and start a conversation with your bot.
Send the /start command to begin.

  Follow the prompts to create a new pair and your maximum and minimum volume alarms for all registered pairs.
  The bot will send you a notification if the volume for that pair exceeds your set maximum or falls below your set minimum.

  *Contributing*

  If you would like to contribute to this project, please follow these steps:

-Make your changes and commit them with clear, concise messages.
-Push your changes to dev branch.
-Submit a pull request to this repository with a description of your changes.

  
