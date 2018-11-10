const router = require("express").Router();

//example on how to require files and make a route template
//const fetch = require("./fetch");
//router.use("/fetch", fetch);

//const require every route that is in here
const createUserAccount = require("./createUserAccount.js");

//required files for updating the user's game ID.
const updateFortniteUID = require("./updateGameUID/updateFortniteUID.js");
const updateHalo5UID = require("./updateGameUID/updateHalo5UID.js");
const updateLOLUID = require("./updateGameUID/updateLOLUID.js");
const updateOverwatchUID = require("./updateGameUID/updateOverwatchUID.js");

//required files for updating the user's game platform
const updateFortnitePlatform = require("./updateGamePlatform/updateFortnitePlatform.js");
const updateLOLPlatform = require("./updateGamePlatform/updateLOLPlatform.js");
const updateOverwatchPlatform = require("./updateGamePlatform/updateOverwatchPlatform.js");

//This route will be for the initial creation of a user's account.
//This will match: backendURL/api/createUserAccount
router.use("/createUserAccount", createUserAccount);

//This route will be for handling of a user updating their UID for a game.
//This will match: backendURL/api/updateGAMEHEREUID
router.use("/updateFortniteUID", updateFortniteUID);
router.use("/updateHalo5UID", updateHalo5UID);
router.use("/updateLOLUID", updateLOLUID);
router.use("/updateOverwatchUID", updateOverwatchUID);

//This route will be for handling of a user updating their Platform for a game.
//This will match: backendURL/api/updateGAMEHEREPlatform
//Note: Halo5 does NOT require a platform.
router.use("/updateFortnitePlatform", updateFortnitePlatform);
router.use("/updateLOLPlatform", updateLOLPlatform);
router.use("/updateOverwatchPlatform", updateOverwatchPlatform);


module.exports = router;
