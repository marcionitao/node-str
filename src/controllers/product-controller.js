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

// lista apenas o produto consoante o slug da pesquisa
exports.getBySlug = (req, res, next) => {
    Product
    .findOne({ 
        slug: req.params.slug, // slug deve ser igual tb na rota 'products-route'
        active: true 
    }, 'title description price slug tags') // apenas quero mostrar um unico dado
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

// lista apenas o produto consoante o id da pesquisa
exports.getById = (req, res, next) => {
    Product
    .findById(req.params.id) // id deve ser igual tb na rota 'products-route'
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

// lista apenas o produto consoante a tag da pesquisa
exports.getByTag = (req, res, next) => {
    Product
    .find({ 
        tags: req.params.tag, // tags deve ser igual tb na rota 'products-route'
        active: true 
    }, 'title description price slug tags') // apenas quero mostrar um unico dado
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
    Product
    .findByIdAndUpdate(req.params.id, { // id deve ser igual tb na rota 'products-route'
        $set: { // estes serão os dados editaveis
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }
    })
    .then(x => {
        res.status(200).send({
            message: 'Produto atualizado com sucesso'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Error ao atualizar produto',
            data: e
        });
    });
};

// remove
exports.delete = (req, res, next) => {
    Product
    .findOneAndRemove(req.params.id) // id deve ser igual tb na rota 'products-route'
    .then(x => {
        res.status(200).send({
            message: 'Produto removido com sucesso'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Error ao remover produto',
            data: e
        });
    });
};
