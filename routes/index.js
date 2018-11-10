const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const user = require('./users');
// require path to createUserAccount
const createUserAccount = require('./createUserAccount')

// API Routes
router.use("/api", apiRoutes);

//This route will be for the initial creation of a user's account.
//This will match: backendURL/createUserAccount
router.use("/createUserAccount", createUserAccount);

//This is John's route to authenticate a user
//This will match: backendurl/users
router.use("/users", user);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
