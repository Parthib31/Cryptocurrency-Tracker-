const cron = require('node-cron');
const fetchCryptoData = require('./services/cryptoJob');
const express = require('express');
const statsRoute = require('./routes/stats');
const deviationRoute = require('./routes/deviation');
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.render('index');
});

// Routes
app.use('/api', statsRoute);
app.use('/api', deviationRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Schedule the job to run every 2 hours
cron.schedule('0 */2 * * *', fetchCryptoData);