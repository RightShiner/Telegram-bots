const Telegraf = require('telegraf');   // Module to use Telegraf API.
const axios = require('axios');
const { Extra, Markup } = Telegraf;   // Extract Extra, Markups from Telegraf module.
const config = require('./config'); // Configuration file that holds telegraf_token API key.

const bot = new Telegraf(config.telegraf_token);    // Let's instantiate a bot using our token.

const Stage = require('telegraf/stage');
const session = require('telegraf/session');
const Scene = require('telegraf/scenes/base');
const stage = new Stage();

const minVolumeSce = new Scene('minVolumeSce');
stage.register(minVolumeSce);
const maxVolumeSce = new Scene('maxVolumeSce');
stage.register(maxVolumeSce);
const poolNameSce = new Scene('poolNameSce');
stage.register(poolNameSce);
const poolAddressSce = new Scene('poolAddressSce');
stage.register(poolAddressSce);

bot.use(session());
bot.use(stage.middleware());

let poolName, poolAddress;
let maxVolume, minVolume;
// const saver = require('./database/filesaver')
// We can get bot nickname from bot informations. This is particularly useful for groups.
bot.telegram.getMe().then((bot_informations) => {
    bot.options.username = bot_informations.username;
    console.log("Server has initialized bot nickname. Nick: " + bot_informations.username);
});

// Command example, pretty easy. Each callback passes as parameter the context.
// Context data includes message info, timestamp, etc; check the official documentation or print ctx.
bot.command('start', (ctx) => ctx.reply('Bot started.'));

// Hears, instead of command, check if the given word or regexp is CONTAINED in user input and not necessarly at beginning.
bot.hears('ymca', (ctx) => ctx.reply("*sing* It's fun to stay at the Y.M.C.A.!"));
bot.hears(/torino/i, (ctx) => ctx.reply("Someone said Torino!?"));

// Inline query support (@yourbot query). Can be used anywhere, even in groups. It works just like @gif bot.
bot.on('inline_query', ctx => {
    let query = ctx.update.inline_query.query;  // If you analyze the context structure, query field contains our query.
    if (query.startsWith("/")) {  // If user input is @yourbot /command
        if (query.startsWith("/audio_src")) { // If user input is @yourbot /audio_src
            // In this case we answer with a list of ogg voice data.
            // It will be shown as a tooltip. You can add more than 1 element in this JSON array. Check API usage "InlineResultVoice".
            return ctx.answerInlineQuery([
                {
                    type: 'voice',  // It's a voice file.
                    id: ctx.update.inline_query.id,    // We reflect the same ID of the request back.
                    title: 'Send audio file sample.ogg',    // Message appearing in tooltip.
                    voice_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg',
                    voice_duration: 16, // We can specify optionally the length in seconds.
                    caption: '[BOT] Audio file sample.ogg!' // What appears after you send voice file.
                }
            ]);
        }
    } else {  // If user input is @yourbot name
        let name_target = query;    // Let's assume the query is actually the name.
        let message_length = name_target.length;    // Name length. We want to ensure it's > 0.
        if (message_length > 0) {
            let full_message;
            let dice = Math.floor(Math.random() * 8) + 1; // Let's throw a dice for a random message. (1, 8)
            switch (dice) {
                case 1: full_message = "IMHO, " + name_target + " sucks."; break;
                case 2: full_message = "IMHO, " + name_target + " is awesome"; break;
                case 3: full_message = name_target + " is not a nice people for me..."; break;
                case 4: full_message = name_target + " for me you are c- Eh! You wanted!"; break;
                case 5: full_message = "Whoa! " + name_target + " is very cool!"; break;
                case 6: full_message = "Grifondoro! No wait, " + name_target + " you're such a noob."; break;
                case 7: full_message = "Sometimes I ask myself why people like " + name_target + " dress up and walk around like that..."; break;
                case 8: full_message = "Watch him! Watch! " + name_target + " is so ugly!"; break;
            }
            // Let's return a single tooltip, not cached (In order to always change random value).
            return ctx.answerInlineQuery([{
                type: 'article',
                id: ctx.update.inline_query.id,
                title: 'You have inserted: ' + name_target,
                description: 'What does ' + bot.options.username + ' thinks about ' + name_target + '?',
                input_message_content: { message_text: full_message }
            }], { cache_time: 0 });
        }
    }
})

bot.hears('Harcoded Variables', async (ctx) => {
    // Prompt the user for the pool details
    savePool()
    await ctx.reply('Please provide the pool name:')
    await ctx.scene.enter('poolNameSce')

    // Handle the user's router selection
    bot.action(['uniswapv2', 'uniswapv3', 'pancakeswap'], (ctx) => {
        const router = ctx.callbackQuery.data

        // Prompt the user to choose a blockchain
        ctx.reply('Please choose a blockchain:', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Ethereum', callback_data: 'ethereum' },
                        { text: 'Binance Smart Chain', callback_data: 'bsc' }
                    ],
                    [
                        { text: 'Polygon', callback_data: 'polygon' },
                        { text: 'Celo', callback_data: 'celo' }
                    ]
                ]
            }
        })

        // Handle the user's blockchain selection
        bot.action(['ethereum', 'bsc', 'polygon', 'celo'], (ctx) => {
            const blockchain = ctx.callbackQuery.data

            showExchangeData(poolName, router)
            // Save the pool details to a database or file
            // savePool(poolName, poolAddress, router, blockchain)

            // ctx.reply(`Pool ${poolName} has been registered for ${blockchain} on ${router}.`)
            ctx.reply('Please provide the minimum volume:')
            ctx.scene.enter('minVolumeSce')
        })
    })
})

bot.command('StartQuering', async (ctx) => {
    // Prompt the user for the range details


})

poolNameSce.on('text', async (ctx) => {
    poolName = await ctx.message.text;
    await ctx.reply(poolName);
    await ctx.reply('Please provide the DEX pool address:')
    await ctx.scene.enter('poolAddressSce')
})

poolAddressSce.on('text', async (ctx) => {
    poolAddress = await ctx.message.text;
    await ctx.reply(poolAddress);
    await ctx.reply('Please choose a router:', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Uniswap v2', callback_data: 'uniswapv2' },
                    { text: 'Uniswap v3', callback_data: 'uniswapv3' }
                ],
                [
                    { text: 'Pancakeswap', callback_data: 'pancakeswap' }
                ]
            ]
        }
    })
})

minVolumeSce.on('text', async (ctx) => {

    minVolume = await ctx.message.text;
    await ctx.reply(`$${minVolume}/day`)
    await ctx.reply('Please provide the maximum volume:')
    await ctx.scene.enter('maxVolumeSce')
})
maxVolumeSce.on('text', async (ctx) => {
    maxVolume = await ctx.message.text;
    // Save the range to a database or file
    // saveVolumeRange(minVolume, maxVolume)
    await ctx.reply(`$${maxVolume}/day`)
    await ctx.reply(`Volume range has been set to $${minVolume} - ${maxVolume}/day.`)

    testRequest();
})

showExchangeData = (poolName, router) => {

    // axios({
    //     url: "https://api.livecoinwatch.com/exchanges/single",
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json",
    //         "x-api-key": config.livecoinwatch_apiKey,
    //     },
    //     data: {
    //         "currency": poolName,
    //         "code": router,
    //         "meta": false,
    //     },
    // })
    //     .then(function (response) {
    //         console.log(response.data);
    //         return response.data;
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
}

savePool = () => {

    //     // define your The Graph API endpoint and your API key
    //     const GRAPH_API_ENDPOINT = 'https://api.thegraph.com/subgraphs/name/YOUR-SUBGRAPH-NAME';
    //     const API_KEY = 'e0c3286301cb32495876f26607c103d8';

    //     // define the Ethereum addresses you want to fetch data for
    //     const addresses = [
    //         '0x9fa252330312c4870fa82DD8273152241Bca8ccC',
    //         '0x2796dB50B5Cf40040364D247D15e45f6B98C46BD',
    //         '0x45B507F7cD9e8cE8F22DbBD6735A08ea9f280d08'
    //     ];

    //     // define your GraphQL query
    //     const query = `
    //   query {
    //     transfers(where: {to_in: $addresses}) {
    //       id
    //       from
    //       to
    //       value
    //     }
    //   }
    // `;

    //     // define the variables for your GraphQL query
    //     const variables = {
    //         addresses: addresses
    //     };

    //     // define the headers for your API request
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${API_KEY}`
    //     };

    //     // make the API request using Axios
    //     axios.post(GRAPH_API_ENDPOINT, {
    //         query: query,
    //         variables: variables
    //     }, {
    //         headers: headers
    //     }).then(response => {
    //         console.log(response.data);
    //     }).catch(error => {
    //         console.error(error);
    //     });
    //     console.log("ddd");
}
// Start bot polling in order to not terminate Node.js application.

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
          volumeUSD
        
        }
        
        }
    `;

    // send a post request to the subgraph API with the query
    axios.post(subgraphUrl, { query })
        .then((response) => {
            const volumeData = response.data.data.pair.volumeUSD;
            console.log(volumeData);
        })
        .catch((error) => {
            console.error(error);
        });

}
bot.startPolling();
