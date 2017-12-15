'use strict';
// importar as dependencies
const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

const config = require ('./config.js');

const app = express();
const router = express.Router();

// conecta base de dados
mongoose.connect(config.connectionString);
/*var promise = mongoose.connect(config, {
    useMongoClient: true,
});*/

// carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// carrega as rotas
const indexRoute = require ('./routes/index-route');
const productsRoute = require ('./routes/products-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

// bodyParse é usado para ajudar na utilização do json e url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// aplicar
app.use('/', indexRoute);
app.use('/products', productsRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;
