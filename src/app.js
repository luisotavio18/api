const express = require('express');

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 3333);

module.exports = app;

const router = require('./routes/rotas');

app.use('/api', router);