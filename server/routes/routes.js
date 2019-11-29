var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

//Define all routes in  this file or seperate them out and export them accordignally
router.get('/', function(request, response){
  response.send('working')
});

module.exports = router;
