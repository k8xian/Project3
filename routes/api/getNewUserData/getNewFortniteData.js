const router = require("express").Router();

const scrapeNewUserDataController = require("../../../controllers/scrapeNewUserDataController.js");

router.route("/")
    .put(scrapeNewUserDataController.getNewFortniteData);

module.exports = router;
