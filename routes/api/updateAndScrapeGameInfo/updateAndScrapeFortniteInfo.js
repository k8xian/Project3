const router = require("express").Router();

// const updatePlatController = require("../../../controllers/updatePlatController.js");
const updateAndScrapeController = require("../../../controllers/updateAndScrapeController");

router.route("/")
    .post(updateAndScrapeController.updateAndScrapeFortnite)

module.exports = router;
