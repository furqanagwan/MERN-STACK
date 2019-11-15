const express = require('express');
const application = express();

//Define your port number here, check with your server provider and thier configuration.

//Use this PORT for testing purposes else use 8080
let defaultPORT = 3000;

//Define your endpoints here of type String
const root = "/";

/*
Define all GET request for all endpoints here make all reponse use JSON as standard.
*/

//Root GET request
application.get(root, (request, response) =>{
  console.log("root get request");
  response.send("Hello user, sucess")
});


application.listen(defaultPORT, () => {

  console.log("Hello User, server is up");

});
