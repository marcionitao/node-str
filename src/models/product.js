// temos de criar um schema, no MongoDB o shema é criado na aplicação e não na DB
// Esse model será usado no controller product
"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    slug: {
        type: String,
        require: true,
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    active: {
        type: Boolean,
        require: true,
        default: true
    },
    tags: [{
        type: String,
        require: true
    }]
});

module.exports = mongoose.model('Product',schema);