// temos de criar um schema, no MongoDB o shema é criado na aplicação e não na DB
// Esse model será usado no controller product
"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId, // referenciado pelo Id a nossa coleção Customer
        ref: 'Customer'
    },
    number: {
        type: String,
        require: true
    },
    createDate: {
        type: Date,
        require: true,
        default: Date.now
    },
    status: {
        type: String,
        require: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    items: [{
        quantity: {
            type: Number,
            require: true,
            default: 1
        },
        price: {
            type: Number,
            require: true,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }     
    }]
});

module.exports = mongoose.model('Order',schema);