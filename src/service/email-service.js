'use strict';

const config = require('../config');
const sendgrid = require('sendgrid')(config.sendgridKey);
/* jshint ignore:start */
exports.send = async(to,subject,body) => {
    sendgrid.send({
        to: to,
        from: 'marcionitao@gmail.com',
        subject: subject,
        html: body
    });
}