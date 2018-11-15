const router = require("express").Router();

const scrapeNewUserDataController = require("../../../controllers/scrapeNewUserDataController.js");

router.route("/:id")
  .put(scrapeNewUserDataController.getNewHalo5Data);

module.exports = router;
