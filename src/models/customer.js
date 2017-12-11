// temos de criar um schema, no MongoDB o shema é criado na aplicação e não na DB
// Esse model será usado no controller product
"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        require: [ true, "O Nome é obrigatorio"],
    },
    email: {
        type: String,
        require: [ true, "O email é obrigatorio"],
    },
    password: {
        type: String,
        require: [ true, "A password é obrigatoria"]
    }
});

module.exports = mongoose.model('Customer',schema);