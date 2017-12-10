'use strict';

// para podermos usar o Model
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// lista todos os produtos
exports.get = (req, res, next) => {
    Product
    .find({ active: true }, 'title price slug') // apenas quero mostrar esses dados e active true
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

// salva
exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
    .save()
    .then(x => {
        res.status(201).send({
            message: 'Produto adicionado com sucesso'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Error ao adicionar produto',
            data: e
        });
    });

};

// edita
exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

// remove
exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
