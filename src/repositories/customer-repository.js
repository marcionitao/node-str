
// simplificar e facilitar o uso dos methods CRUD, em alguns casos seão mais facilmente re-utilizados
"use strict";

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

/* jshint ignore:start */
exports.get = async() => {
    const res = await Customer
    .find({ });
    return res;
}
 /* jshint ignore:end */

 // para salvar produto
/* jshint ignore:start */
exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
};
/* jshint ignore:start */