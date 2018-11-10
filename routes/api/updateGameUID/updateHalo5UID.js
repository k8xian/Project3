const router = require("express").Router();
const updateUIDController = require("../../../controllers/updateUIDController.js");

//This will match /api/update
router.route("/")
    .put(updateUIDController.updateHalo5UID);

module.exports = router;
