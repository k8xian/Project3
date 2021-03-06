const router = require("express").Router();
const updateUIDController = require("../../../controllers/updateUIDController.js");

//This will match /api/update
router.route("/:id")
    .put(updateUIDController.updateFortniteUID);

module.exports = router;
