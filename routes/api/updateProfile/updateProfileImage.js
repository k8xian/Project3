const router = require("express").Router();
const updateProfileController = require("../../../controllers/updateProfileController.js");

//This will match /api/update
router.route("/:id")
    .put(updateProfileController.updateProfileImage);

module.exports = router;
