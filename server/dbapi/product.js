/*jslint node:true*/
/*jslint nomen:true*/
/*jslint es5:true*/
"use strict";

var Products = require('../models/products');

// Wrap all the methods in an object
var product = {
    read: function (req, res, next) {
        res.json({type: "Read", id: req.params.id});
    },
    create: function (req, res, next) {
        res.send(req.body);
    },
    update: function (req, res) {
        var tmp = req.body.likes;
        Products.findById(req.body._id, function (err, obj) {
            if (err) {
                return new Error(err);
            }
      
            obj.likes = tmp;
            obj.save(function (err, data) {
                if (err) {
                    return new Error(err);
                }
            });
            res.send(obj);
        });
    },
    delete: function (req, res, next) {
        res.json({type: "Delete", id: req.params.id});
    },
    getAll: function (req, res, next) {
        Products.find(function (err, data) {
            if (err) {
                console.error(err);
            }
            res.json(data);
        });
    }
};

// Return the object
module.exports = product;