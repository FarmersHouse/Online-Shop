/*jslint node:true*/
/*jslint nomen:true*/
/*jslint es5:true*/
"use strict";

var express = require('express');
var router = express.Router();

// Set static relative path for content requests
var path = require('path');
router.use(express.static(path.join(__dirname, '../../client/')));

// Set product path
var product = require(path.resolve('../server/dbapi/product'));

// Site entry point.
router.get('/', function (req, res, next) {
    res.sendFile(path.resolve('../client/shared/index.html'));
});

// Alternative entry point.
router.get('/index.html', function (req, res) {
    res.sendFile(path.resolve('../client/shared/index.html'));
});

// Get all products
router.get('/dbapi/products', product.getAll);

// Create a product
router.post('/dbapi/createproduct', product.create);

// Update a product
router.post('/dbapi/updateproduct', product.update);

// Get one product, update one product, delete one product
router.route('/dbapi/product/:id')
	.get(product.read)
	.put(product.update)
	.delete(product.delete);
	

module.exports = router;
