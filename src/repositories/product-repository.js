// simplificar e facilitar o uso dos methods CRUD, em alguns casos seão mais facilmente re-utilizados
"use strict";

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// lista todos os produtos e sicronoza com async/await
/* jshint ignore:start */
exports.get = async() => {
    const res = await Product
    .find({ 
        active: true 
    }, 'title price slug');// apenas quero mostrar esses dados e active true
    return res;
};
 /* jshint ignore:end */

// lista apenas o produto consoante o slug da pesquisa
/* jshint ignore:start */
exports.getBySlug = async(slug) => {
    const res = await Product
    .findOne({ 
        slug: slug, // slug deve ser igual tb na rota 'products-route'
        active: true 
    }, 'title description price slug tags'); // apenas quero mostrar um unico dado
    return res;
};
 /* jshint ignore:end */

// lista apenas o produto consoante o id da pesquisa
/* jshint ignore:start */
exports.getById = async(id) => {
    const res = await Product
    .findById(id); // id deve ser igual tb na rota 'products-route'
    return res;
};
 /* jshint ignore:end */

// lista apenas o produto consoante a tag da pesquisa
/* jshint ignore:start */
exports.getByTag = async(tag) => {
    const res = await Product
    .find({ 
        tags: tag, // tags deve ser igual tb na rota 'products-route'
        active: true 
    }, 'title description price slug tags'); // apenas quero mostrar um unico dado
    return res;
};
 /* jshint ignore:end */

// para salvar produto
/* jshint ignore:start */
exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
};
/* jshint ignore:start */

// edita
exports.update = async(id, data) => {
    await Product
    .findByIdAndUpdate(id, { // id deve ser igual tb na rota 'products-route'
        $set: { // estes serão os dados editaveis
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    });
    
};

// remove
exports.delete = async(id) => {
    await Product
    .findOneAndRemove(id); // id deve ser igual tb na rota 'products-route'
};