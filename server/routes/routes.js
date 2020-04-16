var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

//DEFINE GLOBAL ENDPOINTS

// GET ENDPOINTS
router.get('/', function(request, response){
  response.send('working')
});
// POST ENDPOINTS

// DELETE ENDPOINTS

module.exports = router;
