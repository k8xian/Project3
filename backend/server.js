//requiring required technologies//
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cookieSession = require("cookie-session");
const passport = require("passport");
require('dotenv').config();

//requiring routes
const authRoutes = require("./routes/auth-routes");
// const profileRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup");
const keys = require("./config/keys");

//setting up the localhost as 3000 or otherwise deployment config
const PORT = process.env.PORT || 8080;
//getting express going
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

//use cookie session
app.use(
  cookieSession({
    //age is a dimension of time [ms] = 1 day
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

//initialize passport then use cookies
app.use(passport.initialize());
app.use(passport.session());

//getting mongoose going and specifying collection
mongoose.connect(keys.mongodb.dbURL, () => {
  console.log("connected to mongodb");
});

//setup routes
app.use(process.env.FRONTEND_URL + "/auth", authRoutes);
// app.use("/profile", profileRoutes);

//create home route
// app.get("/", (req, res) => {
//   res.render("login");
// });

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
