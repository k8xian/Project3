const router = require("express").Router();
const scrapper = require("../../scripts/scrapper");

router
    .route("/")
    .get(scrapper.scrapeHalo5);

module.exports = router;