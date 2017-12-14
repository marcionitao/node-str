'use strict';
/* jshint ignore:start */

// para usar o repository
const repository = require('../repositories/product-repository');

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

// lista apenas o produto consoante o slug da pesquisa
exports.getBySlug = async(req, res, next) => {
    try {
        const data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha no processo de requisição',
            data: error
        });
    }
};

// lista apenas o produto consoante o id da pesquisa
exports.getById = async(req, res, next) => {
    try {
        const data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha no processo de requisição',
            data: error
        });
    }
};

// lista apenas o produto consoante a tag da pesquisa
exports.getByTag = async(req, res, next) => {
    try {
        const data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha no processo de requisição',
            data: error
        });
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

// edita
exports.put = async(req, res, next) => {
   try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha no processo de requisição',
            data: error
        });
    }
};

// remove
exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id); // id deve ser igual tb na rota 'products-route'
        res.status(200).send({
             message: 'Produto removido com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha no processo de requisição',
            data: error
        });
    }
};
/* jshint ignore:end */