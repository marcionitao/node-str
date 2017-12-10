'use strict';
// importar as dependencies
const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById); // add /admin/ para evitar conflito de rotas GET
router.get('/tags/:tag', controller.getByTag); // add /admin/ para evitar conflito de rotas GET
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;