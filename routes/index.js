const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// require path to createUserAccount
const createUserAccount = require('./createUserAccount')
const getProfileInfo = require("./getProfileInfo.js");

// API Routes
router.use("/api", apiRoutes);

//This route will be for the initial creation of a user's account.
//This will match: backendURL/createUserAccount
router.use("/createUserAccount", createUserAccount);

//This route will be for the initial creation of a user's account.
//This will match: backendURL/getProfileInfo
router.use("/getProfileInfo", getProfileInfo);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
