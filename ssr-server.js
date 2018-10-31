// routing requires
const express = require('express');
const next = require('next');
// const items = require('./routes/api/items');
// const api =require('./routes/api/items');
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const keys = require("./config/keys");



// database requires
const mongoose = require('mongoose');
const MongoDB = require('mongoDB');

// server/app and json requires
const server = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000; 
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//***Backend requires***///
const server = express();
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const mongoose = require("mongoose");
const keys = require("./config/keys");

//cookie session is going to take user create cookie, encrypt it, then send it to the browser
const cookieSession = require("cookie-session");

//passport handles oauth
const passport = require('passport');


app.prepare()
.then(() => {

  //** Start of backend routing **/

  //use cookie session
  server.use(cookieSession({
    //age is a dimension of time [ms] = 1 day
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  }));

  //initialize passport then use cookies
  server.use(passport.initialize());
  server.use(passport.session());

  // connection to mongodb
  mongoose.connect(keys.mongodb.dbURL, () => {
    console.log("connected to mongodb");
  });

  // setup routes
  server.use("/auth", authRoutes);

  //create home route
  //server.get("/", (req, res) => {
    //res.render("login");
  //});

  //** End of backend routing **//
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(port, function(err) {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
});



// BodyParser Middleware
// app.use(bodyParser.json());

// // DB Config
// const db = require('./config/keys.js').mongoURI;

// Configure express to expose a REST API
// server.use(bodyParser.json())
// server.use((req, res, next) => {
// // Also expose the MongoDB database handle so Next.js can access it.
//   req.db = db
//   next()
//   })

// // server.use('/api', api)

//   // Everything that isn't '/api' gets passed along to Next.js
// server.get('*', (req, res) => {
//   return handle(req, res)
//   });

//Connect to Mongo DB
// mongoose.connect(db)
//   .then(() => console.log('MongoDB Connected!'))
//   .catch(err => console.log(err));


// // Use routes
// server.use('/api/items/', items);
