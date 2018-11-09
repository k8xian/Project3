const PORT = process.env.PORT || 3001;
const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
const routes = require("./routes");


// Define middleware here
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
app.use('/users', require('./routes/users'))




// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
