const router = require("express").Router();

const updatePlatController = require("../../../controllers/updatePlatController.js");

router.route("/:id")
    .put(updatePlatController.updateLOLPlatform);

module.exports = router;
