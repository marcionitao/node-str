'use strict';
/* jshint ignore:start */

// para usar o repository
const repository = require('../repositories/customer-repository');
const md5 = require('md5');

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
        // Ao enviar os dados para a DB, precisamos encriptar alguns dados com o MD5
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY) // config.js
        });
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