//Define the imports here
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Define the import variables here
const application = express();

//Define port to which the express app will run on here
const PORT = process.env.PORT || 3001;

// Define what the express instance should use here
application.use(cors());
application.use(bodyParser.json());

//root request/response with response handler
application.get('/', (request, response) => response.send({
  dateTime: new Date().toJSON()
}));

//listen on the port defined earlier
application.listen(PORT, () =>
  console.log(`This app is listening on port ${PORT}!`)
);
