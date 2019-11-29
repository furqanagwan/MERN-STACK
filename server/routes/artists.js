var express = require('express');
var mongoose = require('mongoose');
var Artist = require('../model/Artist.js');
var router = express.Router();

/* GET ALL ARTISTS */
router.get('/', function(req, res, next) {
  Artist.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

module.exports = router;
