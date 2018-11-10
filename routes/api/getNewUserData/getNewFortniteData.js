const router = require("express").Router();

const scrapeNewUserDataController = require("../../../controllers/scrapeNewUserDataController.js");

router.route("/")
    .post(scrapeNewUserDataController.getNewFortniteData);

module.exports = router;