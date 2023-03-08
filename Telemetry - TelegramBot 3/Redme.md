Telegram Volume Alarm Bot
This is a Telegram bot that allows users to set maximum and minimum volume alarms for a certain cryptocurrency pair using the CoinMarketCap API. The bot is built using Node.js, Telegraf, Axios, and the CoinMarketCap API.

Prerequisites
Before you can use this bot, you will need to do the following:

Create a Telegram bot using BotFather.
Obtain an API key from CoinMarketCap.
Install Node.js and npm on your machine.
Installation
Clone this repository to your local machine.
Navigate to the project directory in your terminal.
Install the required packages using npm install.
Create a .env file in the root directory of the project and add your Telegram bot token and CoinMarketCap API key as follows:
makefile
Copy code
TELEGRAM_BOT_TOKEN=<your-telegram-bot-token>
COINMARKETCAP_API_KEY=<your-coinmarketcap-api-key>
Usage
Start the bot using npm start.
Open Telegram and start a conversation with your bot.
Send the /start command to begin.
Follow the prompts to set your maximum and minimum volume alarms for a certain cryptocurrency pair.
The bot will send you a notification if the volume for that pair exceeds your set maximum or falls below your set minimum.
Contributing
If you would like to contribute to this project, please follow these steps:

Fork this repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with clear, concise messages.
Push your changes to your fork.
Submit a pull request to this repository with a description of your changes.
License
This project is licensed under the MIT License.
