const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//***START OF BACKEND CHANGES ***///
// const eApp = express();
// const authRoutes = require("./routes/auth-routes");
// const passportSetup = require("./config/passport-setup");
const mongoose = require("mongoose");
// const keys = require("./config/keys");
//cookie session is going to take user create cookie, encrypt it, then send it to the browser
// const cookieSession = require("cookie-session");
// //passport handles oauth
// const passport = require('passport');

// //use cookie session
// eApp.use(cookieSession({
//   //age is a dimension of time [ms] = 1 day
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [keys.session.cookieKey]
// }));

// //initialize passport then use cookies
// eApp.use(passport.initialize());
// eApp.use(passport.session());

// connection to mongodb
// mongoose.connect(keys.mongodb.dbURL, () => {
//   console.log("connected to mongodb");
// });

// setup routes
// eApp.use("/auth", authRoutes);

// //create home route
// eApp.get("/", (req, res) => {
//   res.render("login");
// });
//***END OF BACKEND CHANGES***/// 


app.prepare()
.then(() => {
  const server = express()
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
