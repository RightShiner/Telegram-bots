//This is just an example to show the basic structure we are looking for to query the outputs from the bitquery script.
require('dotenv').config()
const { Telegraf } = require('telegraf')
const chunkAddresses = require('./utils/chunkAddresses.js')
const { testConstants } = require('./config')
const Output = require('./lib/Output');

const {
  getBootVolume,
  getTotalPoolVolume,
  getFlVolumeAndGasFeeAndTxns,
} = require('./lib/Bitquery');
const { getGasFee, getBotVolumeAndGasFee, getPoolVolume: getPoolVolumeCelo } = require("./lib/TheGraph")
const getTimestamp = require('./utils/getTimestamp.js');
const getClientIds = require('./utils/getClientIds.js');
const getNetworksByClient = require('./utils/getNetworkByClient.js');
const getAddressesByClient = require('./utils/getAddressesByClient.js');

if (!process.env.BOTFATHER_API_KEY) throw new Error("BOTFATHER_API_KEY undefined")
if (!process.env.BITQUERY_API_KEY) throw new Error("BITQUERY_API_KEY undefined")

const bot = new Telegraf(process.env.BOTFATHER_API_KEY)
const clientIds = getClientIds()
bot.help((ctx) => {
  ctx.reply('Este es un bot de ejemplo. Puedes utilizar los siguientes comandos: /start, /help')
})
bot.start((ctx) => {
  ctx.reply('DexQueryBot started')
  ctx.reply("To use the /fetch command, enter '/fetch startDate=YYYY-MM-DD endDate=YYYY-MM-DD network='ethereum' | 'celo' where startDate and endDate are the desired date range in the format of YYYY-MM-DD.")
})
bot.command("fetch", async (ctx) => {
  const command = '/fetch ';
  const message = ctx.message.text;
  const params = message.replace(command, '').trim().split(' ').reduce((obj, param) => {
    const [key, value] = param.split('=');
    obj[key] = value;
    return obj;
  }, {});

  if (!params.startDate || !params.endDate) {
    return ctx.reply('Error: The start or end command is missing. Please input the command with params /fetch startDate=YYYY-MM-DD endDate=YYYY-MM-DD');
  }

  if (!params.network) {
    return ctx.reply("Error: network params missing. Please add network= params. Two possible values 'ethereum' or 'celo'")
  }

  if (params.network != 'celo' && params.network != 'ethereum') {
    return ctx.reply("'Error': network params must be 'ethereum' or 'celo'")
  }
  const regex = /^\d{4}-\d{1,2}-\d{1,2}$/;

  if (!regex.test(params.startDate) || !regex.test(params.endDate)) {
    return ctx.reply('Error: The date format is incorrect. The format should be YYYY-MM-DD.');
  }

  if (!params.clientId) {
    return ctx.reply('Error: The clientId params is missing. Please provide your clientId=');
  }
  if (!(clientIds.includes(params.clientId))) {
    return ctx.reply("Error: Invalid clientId, don't exist");
  }

  ctx.reply('Fetching data, that can take some minutes. Please wait...');
  const start = getTimestamp(params.startDate)
  const end = getTimestamp(params.endDate)

  const network = getNetworksByClient(params.clientId);
  const networkIsArray = typeof network != 'string';
  const addresses = getAddressesByClient(params.clientId);
  const tokens = testConstants.tokens
  const pools = testConstants.pools
  
  const addressesChunks = chunkAddresses(addresses, 100)
  const addressesChunksCelo = chunkAddresses(addresses, 50)

  const output = new Output()

  // const result = await getGasFee(addressesChunksCelo[0], start, end)
  // console.log(result)


  //-------------------------
  // CELO QUERIES
  if (params.network == 'celo' && networkIsArray ? network.includes('celo') : network == 'celo') {

    //BOT VOLUME AND GAS FEE CELO
    const botVolumeAndGasFeeCeloPromises = addressesChunksCelo.map(
      (_addresses) => getBotVolumeAndGasFee(_addresses, start, end)
    )
    const botVolumeAndGasFeeCeloArray = await Promise.all(
      botVolumeAndGasFeeCeloPromises
      .map(async (promise) => {
        const result = await promise;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return result;
      })
    );

    const botVolumeAndGasFeeCelo = botVolumeAndGasFeeCeloArray.filter((value) => value != 0).reduce((a, b) => {
      return {
        botVolume: a.botVolume + b.botVolume,
        gasUsedInUsd: a.gasUsedInUsd + b.gasUsedInUsd
      };
    }, { botVolume: 0, gasUsedInUsd: 0 })
    
    output.setBotVolume('celo', botVolumeAndGasFeeCelo.botVolume);
    output.setGasFees('celo', botVolumeAndGasFeeCelo.gasUsedInUsd);

    //POOL VOLUME CELO
    const poolVolumeCelo = await getPoolVolumeCelo(start, end)
    output.setTotalPoolVolume('celo', poolVolumeCelo)

    ctx.reply(`CELO: ${JSON.stringify(output.getFull('celo'), null, 2)}`)

  }

  if (params.network == 'ethereum' && networkIsArray ? network.includes('ethereum') : network == 'ethereum') {
    // EHTEREUM QUERIES
 
    // POOL VOLUME
    const poolVolume = await getTotalPoolVolume(
      "0xb14b9464b52f502b0edf51ba3a529bc63706b458",
      params.startDate,
      params.endDate,
    )
    output.setTotalPoolVolume('ethereum', poolVolume);


    // FL VOLUME - GAS FEE - NTXNS
    const flVolumeAndGasFeeAndTxnsPromises = addressesChunks.map((_addresses) =>
      getFlVolumeAndGasFeeAndTxns(
        _addresses,
        params.startDate,
        params.endDate
      )
    );
    const flVolumeAndGasFeeAndTxnsArray = await Promise.all(
      flVolumeAndGasFeeAndTxnsPromises.map(async (promise) => {
        const result = await promise;
        await new Promise((resolve) => setTimeout(resolve, 500));
        return result;
      })
    );
    const flVolumeAndGasFeeAndTxns = flVolumeAndGasFeeAndTxnsArray.reduce((a, b) => {
      return {
        flVolume: a.flVolume + b.flVolume,
        nTxns: a.nTxns + b.nTxns,
        gasFee: a.gasFee + b.gasFee
      };
    }, { flVolume: 0, nTxns: 0, gasFee: 0 })

    output.setFlVolume('ethereum', flVolumeAndGasFeeAndTxns.flVolume);
    output.setNTxns('ethereum', flVolumeAndGasFeeAndTxns.nTxns);
    output.setGasFees('ethereum', flVolumeAndGasFeeAndTxns.gasFee);


    // BOT VOLUME
    const botVolumePromises = addressesChunks.map((_addresses) =>
      getBootVolume(
        _addresses,
        [tokens['ethereum'].weth, tokens['ethereum'].ethix],
        params.startDate,
        params.endDate
      )
    );
    
    const botVolumeArray = await Promise.all(
      botVolumePromises.map(async (promise) => {
        const result = await promise;
        await new Promise((resolve) => setTimeout(resolve, 500));
        return result;
      })
    );
    output.setBotVolume('ethereum', botVolumeArray.reduce((a, b) => a + b, 0));

    ctx.reply(`ETHEREUM: ${JSON.stringify(output.getFull('ethereum'), null, 2)}`)
  }

  if (params.network == 'polygon' && networkIsArray ? 'polygon' in network : network == 'polygon') {
  }
});

bot.launch();
console.log('Running DexQueryBot - TheDexer');
console.log('Telegram user: https://t.me/dexquery_bot');


//Comand 1 - input start date
//command 2 - input end date
//start querying - await
//show results
