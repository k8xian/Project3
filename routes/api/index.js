const router = require("express").Router();
// const bookRoutes = require("./books");

//Create a user
const createUser = require("./createUser");

//Update a user's game names
const updateFortnite = require("./updateFortnite");
const updateHalo5 = require("./updateHalo5");
const updateLOL = require("./updateLOL");
const updateOverwatch = require("./updateOverwatch");

// Book routes
// router.use("/books", bookRoutes);

//Settung the actual routes. These will match 
// /api/WHATCOMESAFTERSLASH
// eg: /api/createUser, /api/updateFornite

router.use("/createUser", createUser);

router.use("/updateFornite", updateFortnite);
router.use("/updateHalo5", updateHalo5);
router.use("/updateLOL", updateLOL);
router.use("/updateOverwatch", updateOverwatch);

module.exports = router;
