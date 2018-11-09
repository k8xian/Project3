const router = require("express").Router();
const updateController = require("../../controllers/updateGameAccounts.js");

//This will match /api/update
router.route("/")
    .put(updateController.updateLOL);

module.exports = router;