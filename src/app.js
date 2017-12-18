'use strict';
// importar as dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config.js');

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
const indexRoute = require('./routes/index-route');
const productsRoute = require('./routes/products-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

// bodyParse é usado para ajudar na utilização do json e url, nesse caso definimps um limite de 5MB para o nosso jason
app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

// habilita o CORS
app.use(function (req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Acess-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// aplicar
app.use('/', indexRoute);
app.use('/products', productsRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;
