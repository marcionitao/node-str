'use strict';
/* jshint ignore:start */

// para usar o repository
const repository = require('../repositories/order-repository');
const guid = require ('guid'); // gerador de numero aleatorio

// lista todos os produtos
exports.get = async(req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha no processo de requisição',
            data: error
        })
    }
};

// salva
exports.post = async(req, res, next) => {

    try {
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6), //gera um numero aleatorio e pega os primeiros 6 numeros
            items: req.body.items
        });
        res.status(201).send({
            message: 'Pedido adicionado com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha no processo de requisição',
            data: error
        });
    }
};