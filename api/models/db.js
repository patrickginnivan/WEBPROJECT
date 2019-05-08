// Create database
var mongoose = require('mongoose');

//const dbURI =
// "mongodb+srv://<username>:<password>@cluster0-w4o9c.mongodb.net/";
//copy from CONNECT (MongoDB Atlas)
const dbURI = "mongodb+srv://masonHsieh123:Password123@cluster0-ivkk2.mongodb.net/";
const options = {
  useNewUrlParser: true,
  dbName: "kitchen2kitchen"
};

mongoose.connect(dbURI, options).then(
 () => {
   console.log("Database connection established!");
 },
 err => {
   console.log("Error connecting Database instance due to: ", err);
 }
);

require('./user.js');
require('./product.js');
require('./order.js');
