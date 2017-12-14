'use strict';
// importar as dependencies
const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

router.post('/', controller.post);
router.get('/', controller.get);

module.exports = router;