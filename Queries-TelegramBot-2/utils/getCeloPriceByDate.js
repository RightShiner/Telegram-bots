const axios = require("axios");
const timestampToDateString = require("./timeStampToDateString");

async function getCeloPriceByDate(timestamp) {
  // Comprobamos si la fecha está en el formato correcto (dd-mm-yyyy)
  const date = timestampToDateString(timestamp)
  const regex = /^\d{2}-\d{2}-\d{4}$/;
  if (!regex.test(date)) {
    throw new Error('Invalid date format. Please use the format dd-mm-yyyy');
  }

  // Construimos la URL para hacer la consulta
  const url = `https://api.coingecko.com/api/v3/coins/celo/history?date=${date}&localization=false`;

  // Hacemos la consulta utilizando axios
  try {
    const response = await axios.get(url);
    return response.data.market_data.current_price.usd;
  } catch (error) {
    console.log(error);
    throw new Error('An error occurred while fetching the data');
  }
}

module.exports = getCeloPriceByDate;
