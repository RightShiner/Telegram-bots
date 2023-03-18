//This is just an example to show the basic structure we are looking for to query the outputs from the bitquery script.
require('dotenv').config()
const { Telegraf } = require('telegraf')
const chunkAddresses = require('./utils/chunkAddresses.js')
const { testConstants } = require('./config')
const Output = require('./lib/Output');
const {
  getTokenStartBalance,
  getTxnsCount,
  getGasFee,
  getVolumeOfAccountsInTxns,
  getVolumeOfAccountsTokensInTxns,
  getVolumeOfTokensInTxns,
  getVolumeOfPoolsInTxns,
  getPairAddressByGraphQL,
  getFlashloanVolumen,
} = require('./lib/Bitquery');

if (!process.env.BOTFATHER_API_KEY) throw new Error("BOTFATHER_API_KEY undefined")
if (!process.env.BITQUERY_API_KEY) throw new Error("BITQUERY_API_KEY undefined")

const bot = new Telegraf(process.env.BOTFATHER_API_KEY)

// ClientVariables:
const params = {
  addresses: [
    '0xE90377F95cd3744bd501B3505C7420Ea6dA12e3A',
    '0xEA93e807d832bAE0560485A37d9bA98D52D152c7',
    '0xB0F0A7C4Cd59d79638730D9f88Ce728BCFC3977a',
    '0x6c6c6949477b9B701772cFd828597f7DD1eE7476'
  ],
  poolName: 'Xcre/USDC',
  poolAddress: '0x32c936874ff276c626a9ed028faa10071e3a2fac',
  exchange: 'UniSwap v3',
  network: 'Polygon',
}


bot.help((ctx) => {
  ctx.reply('Este es un bot de ejemplo. Puedes utilizar los siguientes comandos: /start, /help')
})
bot.start((ctx) => {
  ctx.reply('DexQueryBoy started')
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
    return ctx.reply('Error: The start or end command is missing. Please input the command with params ${/start startDate=YYYY-MM-DD endDate=YYYY-MM-DD}');
  }

  const regex = /^\d{4}-\d{1,2}-\d{1,2}$/;

  if (!regex.test(params.startDate) || !regex.test(params.endDate)) {
    return ctx.reply('Error: The date format is incorrect. The format should be YYYY-MM-DD.');
  }

  ctx.reply('Fetching data, that can take some minutes. Please wait...');

  const tokens = testConstants.tokens
  const pools = testConstants.pools
  const addressesChunks = chunkAddresses(testConstants.addresses)
  
  const promisesGetCountTxns = addressesChunks.map((addresses) =>  getTxnsCount(
    addresses,
    params.startDate,
    params.endDate,
    'eth'
  ))
  const promisesGetGasFee = addressesChunks.map((addresses) => getGasFee(
    addresses,
    params.startDate,
    params.endDate,
    'eth'
  ))
  const promisesBotVolume = addressesChunks.map((addresses) => getVolumeOfAccountsTokensInTxns(
    addresses,
    tokens,
    params.startDate,
    params.endDate,
    'eth'
  ))
  const promisesFlashLoanVolume = addressesChunks.map((addresses) => getFlashloanVolumen(
    addresses,
    params.startDate,
    params.endDate,
    'eth'
  ))
  const output = new Output()

  try {
    const nTxns = await Promise.all(promisesGetCountTxns)
    //()
    output.setNTxns(nTxns.reduce((a, b) => a + b, 0))
    await Promise.resolve(setTimeout(() => { }, 2000))
    const gasFee = await Promise.all(promisesGetGasFee)
    //()
    output.setGasFees(gasFee.reduce((a, b) => a + b, 0))

    await Promise.resolve(setTimeout(() => { }, 2000))
    const botVolume = await Promise.all(promisesBotVolume)
    //()
    output.setBotVolume(botVolume.reduce((a, b) => a + b, 0))

    await Promise.resolve(setTimeout(() => { }, 2000))
    const poolVolume = await getVolumeOfPoolsInTxns(
      pools.eth,
      params.startDate,
      params.endDate,
      'eth'
    );
    output.setTotalPoolVolume(poolVolume)

    await Promise.resolve(setTimeout(() => { }, 2000))
    const flashLoanVolue = await Promise.all(promisesFlashLoanVolume)

    output.setFlVolume(flashLoanVolue.reduce((a, b) => a + b, 0))
    ctx.reply(JSON.stringify(output.getFull(), null, 2))
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }

});

bot.on('error', (err) => {
  console.log('Error:', err);
});

bot.launch();
console.log('Running DexQueryBot - TheDexer');
console.log('Telegram user: https://t.me/dexquery_bot');


//Comand 1 - input start date
//command 2 - input end date
//start querying - await
//show results
