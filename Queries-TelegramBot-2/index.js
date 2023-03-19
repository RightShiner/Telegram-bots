//This is just an example to show the basic structure we are looking for to query the outputs from the bitquery script.
require('dotenv').config()
const { Telegraf } = require('telegraf')
const chunkAddresses = require('./utils/chunkAddresses.js')
const { testConstants } = require('./config')
const Output = require('./lib/Output');
const {
  getTxnsCount,
  getGasFee,
  getVolumeOfAccountsTokensInTxns,
  getVolumeOfPoolsInTxns,
  getFlashloanVolumen,
} = require('./lib/Bitquery');

if (!process.env.BOTFATHER_API_KEY) throw new Error("BOTFATHER_API_KEY undefined")
if (!process.env.BITQUERY_API_KEY) throw new Error("BITQUERY_API_KEY undefined")

const bot = new Telegraf(process.env.BOTFATHER_API_KEY)

bot.help((ctx) => {
  ctx.reply('Este es un bot de ejemplo. Puedes utilizar los siguientes comandos: /start, /help')
})
bot.start((ctx) => {
  ctx.reply('DexQueryBot started')
  ctx.reply("To use the /fetch command, enter '/fetch startDate=YYYY-MM-DD endDate=YYYY-MM-DD' where startDate and endDate are the desired date range in the format of YYYY-MM-DD.")
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

  const regex = /^\d{4}-\d{1,2}-\d{1,2}$/;

  if (!regex.test(params.startDate) || !regex.test(params.endDate)) {
    return ctx.reply('Error: The date format is incorrect. The format should be YYYY-MM-DD.');
  }

  ctx.reply('Fetching data, that can take some minutes. Please wait...');

  const tokens = testConstants.tokens
  const pools = testConstants.pools
  const addressesChunks = chunkAddresses(testConstants.addresses)
  const output = new Output()

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
  output.setNTxns(nTxns.reduce((a, b) => a + b, 0));

  const promisesGetGasFee = addressesChunks.map((addresses) =>
    getGasFee(addresses, params.startDate, params.endDate, "eth")
  );
  // Agregando intervalo de espera de 500ms entre cada promesa resuelta
  const gasFee = await Promise.all(
    promisesGetGasFee.map(async (promise) => {
      const result = await promise;
      await new Promise((resolve) => setTimeout(resolve, 500));
      return result;
    })
  );
  output.setGasFees(gasFee.reduce((a, b) => a + b, 0));

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
  output.setBotVolume(botVolume.reduce((a, b) => a + b, 0));

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
  output.setFlVolume(flashLoanVolue.reduce((a, b) => a + b, 0));


  const poolVolume = await getVolumeOfPoolsInTxns(
    pools.eth,
    params.startDate,
    params.endDate,
    'eth'
  );

  output.setTotalPoolVolume(poolVolume)
  ctx.reply(JSON.stringify(output.getFull(), null, 2))

});

bot.launch();
console.log('Running DexQueryBot - TheDexer');
console.log('Telegram user: https://t.me/dexquery_bot');


//Comand 1 - input start date
//command 2 - input end date
//start querying - await
//show results
