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

// Connect to the Mongo DB
//We need to change this db in the future.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SocialSlayer"), { useNewUrlParser: true };

// Start the API server
app.listen(PORT, function() {
  //console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});