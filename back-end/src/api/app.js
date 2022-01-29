const express = require('express');
const cors = require('cors');
const path = require('path');
const { router } = require('../routes/router');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/images', express.static(path.resolve(__dirname, '../../public/images')));

app.use(router);

module.exports = app;
