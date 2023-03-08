const { Telegraf } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('------------------------------------');

async function getPrice() {
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';
  const params = {
    symbol: 'Ethix',
  };
  const headers = {
    'X-CMC_PRO_API_KEY': '2128ae9a-b128-435c-8791-6a1f68fbaf93',
  };
  try {
    const response = await axios.get(url, { params, headers });
    const price = response.data.data.ETH.quote.USD.price;
    return price;
  } catch (error) {
    console.error(error);
    return null;
  }
}

bot.start((ctx) => {
  ctx.reply('Hola! Usa el comando /price para obtener el precio actual de Ethereum en dólares.');
});

bot.command('price', async (ctx) => {
  const price = await getPrice();
  if (price) {
    const message = `El precio actual de Ethereum es $${price.toFixed(2)} USD.`;
    ctx.reply(message);
  } else {
    ctx.reply('No se pudo obtener el precio de Ethereum en este momento. Inténtalo de nuevo más tarde.');
  }
});

bot.launch();
