
// simplificar e facilitar o uso dos methods CRUD, em alguns casos seão mais facilmente re-utilizados
"use strict";

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

/* jshint ignore:start */
exports.get = async() => {
    const res = await Order.find({ })
    .populate('customer') // vai trazer os dados legiveis de customer
    .populate('items.product'); // vai trazer os dados legiveis do produto
    return res;
};
 /* jshint ignore:end */

 // para salvar produto
/* jshint ignore:start */
exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
};
/* jshint ignore:start */