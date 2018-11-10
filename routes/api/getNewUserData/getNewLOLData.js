const router = require("express").Router();

const scrapeNewUserDataController = require("../../../controllers/scrapeNewUserDataController.js");

router.route("/")
    .post(scrapeNewUserDataController.getNewLOLData);

module.exports = router;
