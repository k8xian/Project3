const router = require("express").Router();

const updatePlatController = require("../../../controllers/updatePlatController.js");

router.route("/")
    .put(updatePlatController.updateLOLPlatform);

module.exports = router;
