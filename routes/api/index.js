const router = require("express").Router();

//example on how to require files and make a route template
//const fetch = require("./fetch");
//router.use("/fetch", fetch);

//const require every route that is in here

//required files for updating the user's game ID.
const updateFortniteUID = require("./updateGameUID/updateFortniteUID.js");
const updateHalo5UID = require("./updateGameUID/updateHalo5UID.js");
const updateLOLUID = require("./updateGameUID/updateLOLUID.js");
const updateOverwatchUID = require("./updateGameUID/updateOverwatchUID.js");

//required files for updating the user's game platform
const updateFortnitePlatform = require("./updateGamePlatform/updateFortnitePlatform.js");
const updateLOLPlatform = require("./updateGamePlatform/updateLOLPlatform.js");
const updateOverwatchPlatform = require("./updateGamePlatform/updateOverwatchPlatform.js");

//required files for scrapping the user's data for the games that they play
const getNewFortniteData = require("./getNewUserData/getNewFortniteData");
const getNewHalo5Data = require("./getNewUserData/getNewHalo5Data");
const getNewLOLData = require("./getNewUserData/getNewLOLData");
const getNewOverwatchData = require("./getNewUserData/getNewOverwatchData");

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

//This route will be for handling of a user updating their Platform for a game.
//This will match: backendURL/api/getNewGAMENAMEHEREData
router.use("/getNewFortniteData", getNewFortniteData);
router.use("/getNewHalo5Data", getNewHalo5Data);
router.use("/getNewLOLData", getNewLOLData);
router.use("/getNewOverwatchData", getNewOverwatchData);

module.exports = router;
