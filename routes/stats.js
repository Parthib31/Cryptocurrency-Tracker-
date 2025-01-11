const express = require('express');
const CryptoData = require('../models/CryptoData');
const router = express.Router();

router.get('/stats', async (req, res) => {
  // try {
  //   const { coin } = req.query;

  //   if (!coin) return res.status(400).json({ error: 'Coin is required' });

  //   const latestData = await CryptoData.findOne({ coin }).sort({ timestamp: -1 });

  //   if (!latestData) return res.status(404).json({ error: 'Data not found' });

  //   res.json({
  //     price: latestData.price,
  //     marketCap: latestData.marketCap,
  //     '24hChange': latestData.change24h,
  //   });
  // } catch (err) {
  //   res.status(500).json({ error: 'Server error' });
  // }
  const { coin } = req.query;
  if (!coin) return res.status(400).send('Coin is required');

  const latestData = await CryptoData.findOne({ coin }).sort({ timestamp: -1 });

  if (!latestData) return res.status(404).send('Data not found');

  res.render('stats', {
    coin,
    price: latestData.price,
    marketCap: latestData.marketCap,
    change24h: latestData.change24h,
  });
});

module.exports = router;