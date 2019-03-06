require('dotenv').config();

const PORT = 3000;

const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://UniWare:${process.env.DB_PASSWORD}@cluster0-qqnoc.mongodb.net/test?retryWrites=true`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  });

app.use(express.json());

const services = require('./routes/index');

app.use(services);

if (!module.parent) {
  app.listen(PORT, () => console.log(`Port is listening on ${PORT}`)); // eslint-disable-line
}

module.exports = app;
