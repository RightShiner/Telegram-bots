//This code sets up a Telegram bot that allows users to set maximum and minimum volume alarms for a certain cryptocurrency pair using the CoinMarketCap API. When a user sets an alarm, the bot stores the maximum and minimum volume for that pair in an object called volumeAlarms. The bot then checks the volume for each cryptocurrency pair

const Telegraf = require('telegraf');
const axios = require('axios');

// Create a new Telegraf bot using your bot token
const bot = new Telegraf('<your-telegram-bot-token>');

// Set the CoinMarketCap API URL and your API key
const cmcUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';
const cmcApiKey = '<your-coinmarketcap-api-key>';

// Create an object to store the maximum and minimum volume for each cryptocurrency pair
const volumeAlarms = {};

// Define a command to start the bot
bot.command('start', (ctx) => {
  ctx.reply('Welcome! Use the /setalarm command to set your volume alarms.');
});

// Define a command to set the volume alarm for a cryptocurrency pair
bot.command('setalarm', (ctx) => {
  ctx.reply('Enter the cryptocurrency pair you want to set an alarm for (e.g. BTC/USD)');
  bot.hears(/^\w+\/\w+$/, async (ctx) => {
    const pair = ctx.message.text.toUpperCase();
    ctx.reply(`Enter the maximum volume for ${pair}`);
    bot.hears(/^\d+(\.\d+)?$/, async (ctx) => {
      const maxVolume = Number(ctx.message.text);
      volumeAlarms[pair] = { maxVolume };
      ctx.reply(`Enter the minimum volume for ${pair}`);
      bot.hears(/^\d+(\.\d+)?$/, async (ctx) => {
        const minVolume = Number(ctx.message.text);
        volumeAlarms[pair].minVolume = minVolume;
        ctx.reply(`Volume alarms set for ${pair}.`);
      });
    });
  });
});

// Define a function to check the volume for a cryptocurrency pair
async function checkVolume(pair) {
  try {
    // Make a request to the CoinMarketCap API for the latest volume data for the pair
    const response = await axios.get(cmcUrl, {
      params: {
        symbol: pair.split('/')[0],
        convert: pair.split('/')[1],
      },
      headers: {
        'X-CMC_PRO_API_KEY': cmcApiKey,
      },
    });
    const volume = response.data.data[pair.split('/')[0]].quote[pair.split('/')[1]].volume_24h;
    // Check if the volume exceeds the maximum or falls below the minimum, and send a notification to the user if so
    if (volume > volumeAlarms[pair].maxVolume) {
      bot.telegram.sendMessage('<your-telegram-user-id>', `Volume for ${pair} is above the maximum (${volume} > ${volumeAlarms[pair].maxVolume}).`);
    } else if (volume < volumeAlarms[pair].minVolume) {
      bot.telegram.sendMessage('<your-telegram-user-id>', `Volume for ${pair} is below the minimum (${volume} < ${volumeAlarms[pair].minVolume}).`);
    }
  } catch (error) {
    console.error(error);
  }
}

// Define an interval to check the volume for each cryptocurrency pair every minute
setInterval(() => {
  Object.keys(volumeAlarms).forEach(checkVolume);
}, 60000);

// Start the bot
bot.startPolling();

