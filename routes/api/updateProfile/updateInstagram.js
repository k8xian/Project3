const router = require("express").Router();
const updateProfileController = require("../../../controllers/updateProfileController.js");

//This will match /api/update
router.route("/")
    .put(updateProfileController.updateInstagram);

module.exports = router;
