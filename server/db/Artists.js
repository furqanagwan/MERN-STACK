//Define mongoose and other imports here
const mongoose = require('mongoose');

//Create mongoose database connection here
mongoose.connect(process.env.DB_URL);

const dataBase = mongoose.connection;

dataBase.on('Error', (connectionError) => {
  console.error(connectionError);
});

dataBase.once('open', () => {
  console.log('Database connection sucessfull');
});

//Export this code as a module that can be used elsewhere
export default dataBase;
