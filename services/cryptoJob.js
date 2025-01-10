const axios = require('axios');
const CryptoData = require("../models/CryptoData");

const fetchCryptoData = async () => {
  try {
    const coins = ['bitcoin', 'matic-network', 'ethereum'];
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price`,
      {
        params: {
          ids: coins.join(','),
          vs_currencies: 'usd',
          include_market_cap: true,
          include_24hr_change: true,
        },
      }
    );

    for (const coin of coins) {
      const data = response.data[coin];
      await CryptoData.create({
        coin,
        price: data.usd,
        marketCap: data.usd_market_cap,
        change24h: data.usd_24h_change,
      });
    }

    console.log('Crypto data updated successfully');
  } catch (err) {
    console.error('Error fetching crypto data:', err);
  }
};

module.exports = fetchCryptoData;