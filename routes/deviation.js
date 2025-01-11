const express = require('express');
const CryptoData = require('../models/CryptoData');
const router = express.Router();

router.get('/deviation', async (req, res) => {
  try {
    const { coin } = req.query;

    if (!coin) return res.status(400).json({ error: 'Coin is required' });

    const last100Records = await CryptoData.find({ coin })
      .sort({ timestamp: -1 })
      .limit(100);

    if (!last100Records.length)
      return res.status(404).json({ error: 'Not enough data' });

    const prices = last100Records.map((record) => record.price);
    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const variance =
      prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
      prices.length;
    const deviation = Math.sqrt(variance);

    //   res.json({ deviation: deviation.toFixed(2) });
    res.render('deviation', {
      coin,
      deviation: deviation.toFixed(2),
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });    
  }
});

module.exports = router;