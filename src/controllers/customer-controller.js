'use strict';
/* jshint ignore:start */

// para usar o repository
const repository = require('../repositories/customer-repository');

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
        await repository.create(req.body);
        res.status(201).send({
            message: 'Produto adicionado com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha no processo de requisição',
            data: error
        });
    }
};