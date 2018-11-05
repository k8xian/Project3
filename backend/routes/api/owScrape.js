const router = require("express").Router();
const scrapper = require("../../scripts/scrapper");

router
    .route("/")
    .get(scrapper.scrapeOverwatch);

module.exports = router;