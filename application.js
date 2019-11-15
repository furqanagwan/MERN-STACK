//define imports and import objects
const express = require('express');
const application = express();

//Define local JSON data here
var OctobersVeryOwn = require('./data/json/Artists.json');

//Define your port number here, check with your server provider and thier configuration.

//Use this PORT for testing purposes else use 8080
let defaultPORT = 3000;

//Define your endpoints here of type String
const root = "/";
const artists = "/artists";



/*
Define all GET request for all endpoints here make all reponse use JSON as standard.
*/

// //Root GET request response in String
// application.get(root, (request, response) =>{
//   console.log("root get request");
//   response.send("Hello user, sucess")
// });

//Root GET request response in JSON
application.get(root, (request, response) =>{
  response.json({
    message: "Hello user, sucess"
  })
});

//artists GET request response in JSON
application.get(artists, (request, response) =>{
  response.json({
    OctobersVeryOwn
  })
});


application.listen(defaultPORT, () => {

  console.log("Hello User, server is up");

});
