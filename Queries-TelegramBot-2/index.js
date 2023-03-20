//This is just an example to show the basic structure we are looking for to query the outputs from the bitquery script.
require('dotenv').config()
const { Telegraf } = require('telegraf')
const chunkAddresses = require('./utils/chunkAddresses.js')
const { testConstants } = require('./config')
const Output = require('./lib/Output');

const {
  getTxnsCount,
  getGasFee: getGasFeeBitQuery,
  getVolumeOfAccountsTokensInTxns,
  getVolumeOfPoolsInTxns,
  getFlashloanVolumen,
} = require('./lib/Bitquery');
const { getGasFee } = require("./lib/TheGraph")
const { getPoolVolume, getBootVolume } = require('./lib/TheGraph.js');
const getTimestamp = require('./utils/getTimestamp.js');

if (!process.env.BOTFATHER_API_KEY) throw new Error("BOTFATHER_API_KEY undefined")
if (!process.env.BITQUERY_API_KEY) throw new Error("BITQUERY_API_KEY undefined")

const bot = new Telegraf(process.env.BOTFATHER_API_KEY)

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

  ctx.reply('Fetching data, that can take some minutes. Please wait...');
  const start = getTimestamp(params.startDate)
  const end = getTimestamp(params.endDate)

  const tokens = testConstants.tokens
  const pools = testConstants.pools
  const addressesChunksCelo = chunkAddresses(testConstants.addresses, 50)

  const addressesChunks = chunkAddresses(testConstants.addresses, 100)

  const output = new Output()

  // const result = await getGasFee(addressesChunksCelo[0], start, end)
  // console.log(result)


  //-------------------------
  // CELO QUERIES
  if (params.network == 'celo') {

    //GAS FEES CELO, FUNCIONA
    const gasFeeCeloPromises = addressesChunksCelo.map(
      (addresses) => getGasFee(addresses, start, end)
    )
    const gasFeeCelo = await Promise.all(
      gasFeeCeloPromises.map(async (promise) => {
        const result = await promise;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return result;
      })
    );
    output.setGasFees('celo', gasFeeCelo.reduce((a, b) => a + b, 0))

    //BOT VOLUME CELO
    const botVolumeCeloPromises = addressesChunksCelo.map(
      (addresses) => getBootVolume(addresses, start, end)
    )
    const botVolumeCelo = await Promise.all(
      botVolumeCeloPromises.map(async (promise) => {
        const result = await promise;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return result;
      })
    );
    output.setBotVolume('celo', botVolumeCelo.reduce((a, b) => a + b, 0))

    //POOL VOLUME CELO, FUNCIONA
    const poolVolumeCelo = await getPoolVolume(start, end)
    output.setTotalPoolVolume('celo', poolVolumeCelo)

    ctx.reply(`CELO: ${JSON.stringify(output.getFull('celo'), null, 2)}`)

  }

  if (params.network == 'ethereum') {
    // EHTEREUM QUERIES

    // Generate getTxnsCount array of promises
    const promisesGetCountTxns = addressesChunks.map((addresses) =>
      getTxnsCount(addresses, params.startDate, params.endDate, "eth")
    );
    // Agregando intervalo de espera de 500ms entre cada promesa resuelta
    const nTxns = await Promise.all(
      promisesGetCountTxns.map(async (promise) => {
        const result = await promise;
        await new Promise((resolve) => setTimeout(resolve, 500));
        return result;
      })
    );
    output.setNTxns('ethereum', nTxns.reduce((a, b) => a + b, 0));



    const promisesGetGasFee = addressesChunks.map((addresses) =>
      getGasFeeBitQuery(addresses, params.startDate, params.endDate, "eth")
    );
    // Agregando intervalo de espera de 500ms entre cada promesa resuelta
    const gasFee = await Promise.all(
      promisesGetGasFee.map(async (promise) => {
        const result = await promise;
        await new Promise((resolve) => setTimeout(resolve, 500));
        return result;
      })
    );
    output.setGasFees('ethereum', gasFee.reduce((a, b) => a + b, 0));



    const promisesBotVolume = addressesChunks.map((addresses) =>
      getVolumeOfAccountsTokensInTxns(
        addresses,
        tokens,
        params.startDate,
        params.endDate,
        "eth"
      )
    );


    // Agregando intervalo de espera de 500ms entre cada promesa resuelta
    const botVolume = await Promise.all(
      promisesBotVolume.map(async (promise) => {
        const result = await promise;
        await new Promise((resolve) => setTimeout(resolve, 500));
        return result;
      })
    );
    output.setBotVolume('ethereum', botVolume.reduce((a, b) => a + b, 0));

    const promisesFlashLoanVolume = addressesChunks.map((addresses) =>
      getFlashloanVolumen(addresses, params.startDate, params.endDate, "eth")
    );
    // Agregando intervalo de espera de 500ms entre cada promesa resuelta
    const flashLoanVolue = await Promise.all(
      promisesFlashLoanVolume.map(async (promise) => {
        const result = await promise;
        await new Promise((resolve) => setTimeout(resolve, 500));
        return result;
      })
    );
    output.setFlVolume('ethereum', flashLoanVolue.reduce((a, b) => a + b, 0));


    const poolVolume = await getVolumeOfPoolsInTxns(
      pools.eth,
      params.startDate,
      params.endDate,
      'eth'
    );

    output.setTotalPoolVolume('ethereum', poolVolume)
    ctx.reply(`ETHEREUM: ${JSON.stringify(output.getFull('ethereum'), null, 2)}`)
  }
});

bot.launch();
console.log('Running DexQueryBot - TheDexer');
console.log('Telegram user: https://t.me/dexquery_bot');


//Comand 1 - input start date
//command 2 - input end date
//start querying - await
//show results
