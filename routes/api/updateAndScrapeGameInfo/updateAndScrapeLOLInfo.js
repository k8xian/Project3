const router = require("express").Router();

// const updatePlatController = require("../../../controllers/updatePlatController.js");
const updateAndScrapeController = require("../../../controllers/updateAndScrapeController");

router.route("/:id")
    .post(updateAndScrapeController.updateAndScrapeLOL)

module.exports = router;
