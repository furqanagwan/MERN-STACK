//Define the imports here
const express = require('express');
const router = require('./routes/routes.js');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Define the import variables here
const application = express();

//Define port to which the express app will run on here, default will be 3001 because front end is on 3002
const PORT = process.env.PORT || 3002;

// Define what the express instance should use here
application.set('view engine', 'ejs');
application.set('views', path.join(__dirname, '../client'));

application.use(express.static(path.join(__dirname, '../client')));
application.use('/', router);

//listen on the port defined earlier
application.listen(PORT);
