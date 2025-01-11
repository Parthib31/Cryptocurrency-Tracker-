# Cryptocurrency Tracker

A server-side application built with Node.js and MongoDB, designed to track cryptocurrency data such as current price, market capitalization, and 24-hour change for Bitcoin, Matic, and Ethereum. The project also calculates the standard deviation of the cryptocurrency price based on the last 100 records.

## Features

1. **Background Job:** Automatically fetches cryptocurrency data every 20 seconds (or 2 hours for production) using the CoinGecko API and stores it in MongoDB.
2. **Real-time API Endpoints:**
- `/stats` : Fetches the latest stats for a specified cryptocurrency.
- `/deviation` : Calculates and returns the standard deviation of the cryptocurrency price based on the last 100 records.

## APIs

1. ### `/stats`:
   - **Method:** GET
- **Query Parameters:**
  ```json
  {
    "coin": "bitcoin" // Can be 'bitcoin', 'matic-network', or 'ethereum'
  }
- **Response Example:**
  ```json
  {
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
  }

2. ### `/deviation`:
   - **Method:** GET
- **Query Parameters:**
  ```json
  {
    "coin": "bitcoin" // Can be 'bitcoin', 'matic-network', or 'ethereum'
  }
- **Response Example:**
  ```json
  {
  "deviation": 4082.48
  }

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB Atlas

## Procedure
- Fork the repository and clone the project in your local machine.
- In a terminal, run `npm install` to download all the dependencies.
- In the former terminal, run `nodemon app.js` to start your server.
- Now in the browser type **"" http://localhost:3000 ""**

## Hosted Website URL

**"https://cryptocurrency-tracker-roan.vercel.app/"**

## Author

# @Parthib31