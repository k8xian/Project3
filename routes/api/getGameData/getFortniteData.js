const router = require("express").Router();

const getGameData = require("../../../controllers/getGameData.js");

router.route("/")
    .get(getGameData.getFortniteData);

module.exports = router;
