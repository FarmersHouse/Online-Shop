/*jslint node:true*/
/*jslint nomen:true*/
/*jslint es5:true*/
"use strict";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
