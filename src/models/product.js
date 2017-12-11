// temos de criar um schema, no MongoDB o shema é criado na aplicação e não na DB
// Esse model será usado no controller product
"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        require: [ true, "O title é obrigatorio"],
        trim: true
    },
    slug: {
        type: String,
        require: [ true, "O slug é obrigatorio"],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        require: [ true, "A description é obrigatoria"]
    },
    price: {
        type: Number,
        require: [ true, "O preço é obrigatorio"]
    },
    active: {
        type: Boolean,
        require: true,
        default: true
    },
    tags: [{
        type: String,
        require: [ true, "A tag é obrigatorio"]
    }]
});

module.exports = mongoose.model('Product',schema);