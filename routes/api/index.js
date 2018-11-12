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

//required files for updating both the user's game ID and platform at the same time
const updateBothFortnite = require("./updateBoth/updateBothFortnite.js");
const updateBothLOL = require("./updateBoth/updateBothLOL.js");
const updateBothOverwatch = require("./updateBoth/updateBothOverwatch.js");

//required files for scrapping the user's data for the games that they play
const getNewFortniteData = require("./getNewUserData/getNewFortniteData.js");
const getNewHalo5Data = require("./getNewUserData/getNewHalo5Data.js");
const getNewLOLData = require("./getNewUserData/getNewLOLData.js");
const getNewOverwatchData = require("./getNewUserData/getNewOverwatchData.js");

//required files for updating generic profile information
const updateBio = require("./updateProfile/updateBio.js");
const updateInstagram = require("./updateProfile/updateInstagram.js");
const updateProfileImage = require("./updateProfile/updateProfileImage.js");
const updateTwitch = require("./updateProfile/updateTwitch.js");
const updateTwitter = require("./updateProfile/updateTwitter.js");

//This route will be used for handling the updating of generic profile information
//This will match: backendURL/api/updateXXXXXXXX
router.use("/updateBio", updateBio);
router.use("/updateInstagram", updateInstagram);
router.use("/updateProfileImage", updateProfileImage);
router.use("/updateTwitch", updateTwitch);
router.use("/updateTwitter", updateTwitter);

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
//This will match: backendURL/api/updateGAMEHEREPlatform
//Note: Halo5 does NOT require a platform.
router.use("/updateBothFortnite", updateBothFortnite);
router.use("/updateBothLOL", updateBothLOL);
router.use("/updateBothOverwatch", updateBothOverwatch);

//This route will be for handling of a user updating their Platform for a game.
//This will match: backendURL/api/getNewGAMENAMEHEREData
router.use("/getNewFortniteData", getNewFortniteData);
router.use("/getNewHalo5Data", getNewHalo5Data);
router.use("/getNewLOLData", getNewLOLData);
router.use("/getNewOverwatchData", getNewOverwatchData);

module.exports = router;
