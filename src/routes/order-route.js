'use strict';
// importar as dependencies
const express = require('express');
const router = express.Router();
const order = require('../controllers/order-controller');

router.get('/', order.get);
router.post('/', order.post);

module.exports = router;