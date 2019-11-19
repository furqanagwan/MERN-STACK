//Define imports
const express = require('express');
//Create object of imports
const application = express();
//Define local JSON data here
var OctobersVeryOwn = require('./data/json/Artists.json');
//Define your port here
let PORT = process.env.PORT || 3000;

//Define your endpoints here
const root = "/";
const artists = "/artists";

//Define middleware here

//Re route any incoming GET request to root to show a static webpage
application.use(root, express.static(__dirname + '/data/html/testHTML.html'))

//GET Request for local html page on root directory
application.get(root, (request, response) =>{
  response.sendFile(__dirname + '/data/html/testHTML.html');
});

// GET Request for local JSON data
application.get(artists, (request, response) =>{
  response.json({
    OctobersVeryOwn
  })
});
// Tell the server to listen on the given port
application.listen(PORT, () => {});
