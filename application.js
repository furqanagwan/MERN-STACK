"use strict";
//Define imports
const express = require('express');
//Create object of imports
const application = express();

let StatusCodes = {
  Information: 100,
  Sucess: 200,
  Redirection: 300,
  Client_error: 400,
  Server_error: 500
}

let RequestType = {
GET: "GET",
POST: "POST",
HEAD: "HEAD",
DELETE: "DELETE",
OPTIONS: "OPTIONS"
}

//Define local JSON data here
var OctobersVeryOwn = require('./Backend/JSON/Artists.json');
//Define your port here
let PORT = process.env.PORT || 3000;

//Define your endpoints here
const root = "/";
const artists = "/artists";

//Define middleware here
//Re route any incoming GET request to root to show a static webpage
application.use(root, express.static(__dirname + '/Frontend/react_application/src/index.js'))

//express all fucntion for all types of request types
application.all(root, (request, response) => {
  if (response.statusCode == StatusCodes.Sucess){
    response.sendFile(__dirname + '/Frontend/react_application/src/index.js');
  }
});


// //GET Request for local html page on root directory
// application.get(root, (request, response) =>{
//   if (response.statusCode == StatusCodes.Sucess){
//     response.sendFile(__dirname + '/data/html/testHTML.html');
//   }
// });

// GET Request for local JSON data
application.get(artists, (request, response) =>{
  response.json({
    OctobersVeryOwn
  })
});
// Tell the server to listen on the given port
application.listen(PORT, () => {});
