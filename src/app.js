'use strict';
// importar as dependencies
const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

const app = express();
const router = express.Router();

// conecta base de dados
// mongoose.connect('mongodb://balta:balta@ds044787.mlab.com:44787/ndstr');
var promise = mongoose.connect('mongodb://balta:balta@ds044787.mlab.com:44787/ndstr', {
    useMongoClient: true,
    /* other options */
});

// carrega as rotas
const indexRoute = require ('./routes/index-route');
const productsRoute = require ('./routes/products-route');

// bodyParse é usado para ajudar na utilização do json e url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productsRoute);

module.exports = app;
