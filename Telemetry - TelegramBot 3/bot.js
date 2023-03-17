const Telegraf = require('telegraf');   // Module to use Telegraf API.
const axios = require('axios');
const { Extra, Markup } = Telegraf;   // Extract Extra, Markups from Telegraf module.
const config = require('./config'); // Configuration file that holds telegraf_token API key.

const bot = new Telegraf(config.telegraf_token);    // Let's instantiate a bot using our token.

const Stage = require('telegraf/stage');
const session = require('telegraf/session');
const Scene = require('telegraf/scenes/base');
const stage = new Stage();

var cron = require('node-cron');

const currentTimestamp = Math.floor(Date.now() / 1000);
console.log(currentTimestamp);
const yesterdayTimestamp = Math.floor((Date.now() - 86400000) / 1000);
console.log(yesterdayTimestamp);

bot.use(session());
bot.use(stage.middleware());

let volumeData = [];
let vol_range = [
    { min: 1000, max: 3000 },
    { min: 1000, max: 10000 },
    { min: 10000, max: 20000 },
    { min: 100, max: 2000 }];
let pair_info = [
    [`<b>⚠Warning</b>\n`,
        `✅Name: Xcre/USDC\n`,
        `✅Exchange: UniSwap v3\n`,
        `✅Blockchain: Polygon\n`,
        `✅Pool: 0x32c936874ff276c626a9ed028faa10071e3a2fac\n`,
        `❎Volumen range: $1000-3000/day\n`],
    [`<b>⚠Warning</b>\n`,
        `✅Name: Ethix/Eth\n`,
        `✅Exchange: UniSwap v2\n`,
        `✅Blockchain: Ethereum\n`,
        `✅Pool: 0xb14b9464b52f502b0edf51ba3a529bc63706b458\n`,
        `❎Volumen range: $1000-10000/day\n`],
    [`<b>⚠Warning</b>\n`,
        `✅Name: Ethix/Cusd\n`,
        `✅Exchange: UniSwap v3\n`,
        `✅Blockchain: Celo\n`,
        `✅Pool: 0x3420720e561f3082f1e514a4545f0f2e0c955a5d\n`,
        `❎Volumen range: $10000-20000/day\n`],
    [`<b>⚠Warning</b>\n`,
        `✅Name: BBCN/BNB\n`,
        `✅Exchange: PancakeSwap\n`,
        `✅Blockchain: BSC\n`,
        `✅Pool: 0x0883147a16d0ccaab5554c140a3435c74b202c66\n`,
        `❎Volumen range: $100-2000/day\n`]];

bot.telegram.getMe().then((bot_informations) => {
    bot.options.username = bot_informations.username;
    console.log("Server has initialized bot nickname. Nick: " + bot_informations.username);
});

bot.command('start', (ctx) => ctx.reply('Bot started.'));

bot.hears('Harcoded Variables', async (ctx) => {
    testRequest();
})

bot.command('StartQuering', async (ctx) => {
    task.start();
})


var task = cron.schedule('*/5 * */1 * * *', () => {
    volumeData.forEach((value, index) => {
        if (value > vol_range[index].max || value < vol_range[index].min) {
            bot.telegram.sendMessage(config.chai_id,
                `${pair_info[index].join('')}❗dailyVolumeData${index + 1} is out range value: <b><i>${value}</i></b>`,
                { parse_mode: 'HTML' });
        }
    });
}, {
    scheduled: false,
    timezone: "America/Sao_Paulo"
});

testRequest = () => {
    const subgraphUrl = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';

    // specify the query to retrieve the daily volume of a pair
    const query = `
    {
        pair(id:"0xb14b9464b52f502b0edf51ba3a529bc63706b458")
        
        {
        token0{name, symbol},
        token1{name, symbol},
        reserve0,
        reserve1,
        reserveUSD,
        trackedReserveETH,
          volumeUSD,
        
        }
        
        }
    `;

    // send a post request to the subgraph API with the query
    axios.post(subgraphUrl, { query })
        .then((response) => {
            volumeData[1] = (parseFloat(response.data.data.pair.volumeUSD)).toFixed(2);
        })
        .catch((error) => {
            console.error(error);
        });

}
bot.startPolling();
