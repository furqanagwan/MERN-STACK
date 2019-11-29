//Define mongoose and other imports here
const mongoose = require('mongoose');

//Create mongoose database connection here
mongoose.connect(process.env.DB_URL);

const connection = mongoose.connection;

connection.on('Error', (connectionError) => {
  console.error(connectionError);
});

connection.once('open', () => {
  console.log('Connection sucessfull');
});

//Export this code as a module that can be used elsewhere
export default connection;
