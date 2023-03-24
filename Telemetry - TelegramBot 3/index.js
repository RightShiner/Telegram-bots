
const Telegraf = require('telegraf');   // Module to use Telegraf API.
const axios = require('axios');
const config = require('./config'); // Configuration file that holds telegraf_token API key.
const Stage = require('telegraf/stage');
const session = require('telegraf/session');
const Scene = require('telegraf/scenes/base');
var cron = require('node-cron');
const { Extra, Markup } = Telegraf;   // Extract Extra, Markups from Telegraf module.
const dotenv = require('dotenv');
dotenv.config();

const pairs = require('./Scheme');

const bot = new Telegraf(process.env.TELEGRAF_TOKEN);    // Let's instantiate a bot using our token.

const stage = new Stage();

bot.use(session());
bot.use(stage.middleware());

bot.telegram.getMe().then((bot_informations) => {
  bot.options.username = bot_informations.username;
  console.log("Server has initialized bot nickname. Nick: " + bot_informations.username);
});

let chain = '';
let h24 = 0;
let h1 = 0;
let vol_range_flag = 0;
let vol_tmp = [];
let vol_len = 0;

bot.command('start', async (ctx) => {
  await ctx.reply('Bot started.');
  pair_show();
  task.start();
});
bot.command('show', async (ctx) => {
  await ctx.reply('Current State');
  vol_show(1);
});
bot.command('stop', async (ctx) => {
  task.stop();
  await ctx.reply('Bot stopped.');
});

var task = cron.schedule('0 */3 * * *', () => {
  vol_show(2);
}, {
  scheduled: false,
  timezone: "America/Sao_Paulo"
});

const pair_show = () => {
  vol_len = 0;
  pairs.forEach(async (value, index) => {
    vol_tmp[index] = 
      `🤑Pair${index + 1}\n` +
      `Name: ${value.Name}\n` +
      `Exchange: ${value.Exchange}\n` +
      `Blockchain: ${value.Blockchain}\n` +
      `Pool: ${value.Pool}\n` +
      `Volumen range: $${value.Min}-${value.Max}/day\n`;
      vol_len++;
  });
  show_message(vol_len);
}
const vol_show = (data_flag) => {
  vol_range_flag = 0;
  vol_len = 0;
  pairs.forEach(async (value, index) => {
    switch (value.Blockchain) {
      case 'Polygon':
        chain = 'polygon';
        break;
      case 'Ethereum':
        chain = 'ethereum';
        break;
      case 'Celo':
        chain = 'celo';
        break;
      case 'BSC':
        chain = 'bsc';
        break;
    }

    await axios({
      method: 'GET',
      url: `https://api.dexscreener.com/latest/dex/pairs/${chain}/${value.Pool}`,
      mode: 'cors',
    })
      .then((response) => {
        h24 = response.data.pair.volume.h24;
        h1 = response.data.pair.volume.h1;
        if (data_flag == 1) {
          vol_tmp[index] =
            `🤑Pair${index + 1}\n` +
            `Name: ${value.Name}\n` +
            `Exchange: ${value.Exchange}\n` +
            `Blockchain: ${value.Blockchain}\n` +
            `Pool: ${value.Pool}\n` +
            `Volumen range: $${value.Min}-${value.Max}/day\n` +
            `dailyVolumeData: ${h24}`;
          vol_len++;
          show_message(vol_len);
        }
        if (data_flag == 2) {
          if (h24 > value.Max || h24 < value.Min) {
            bot.telegram.sendMessage(process.env.CHAI_ID,
              `⚠Warning\n` +
              `✅Name: ${value.Name}\n` +
              `✅Exchange: ${value.Exchange}\n` +
              `✅Blockchain: ${value.Blockchain}\n` +
              `✅Pool: ${value.Pool}\n\n` +
              `❎Volumen range: $${value.Min}-${value.Max}/day\n` +
              `❗dailyVolumeData is out range value: ${h24}`);
          }
          else {
            vol_range_flag++;
            if (vol_range_flag == pairs.length) {
              bot.telegram.sendMessage(process.env.CHAI_ID,
                'No pools are out of range');
              vol_range_flag = 0;
            }
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

const show_message = () => {
  if (vol_len == pairs.length) {
    bot.telegram.sendMessage(process.env.CHAI_ID, vol_tmp.join('\n\n'));
    vol_tmp = [];
    vol_len = 0;
  }
}

bot.startPolling();
