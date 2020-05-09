const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

// Set path to env mode
dotenv.config({ path: './config/config.env' });

const connectDB = require('./config/db');
connectDB();

const transactions = require('./routes/transactions');

const app = express();

// Body parser
app.use(express.json());
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
