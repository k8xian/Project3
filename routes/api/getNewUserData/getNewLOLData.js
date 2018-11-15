const router = require("express").Router();

const scrapeNewUserDataController = require("../../../controllers/scrapeNewUserDataController");

router.route("/:id")
  .put(scrapeNewUserDataController.getNewLOLData);

module.exports = router;
