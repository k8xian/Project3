const router = require("express").Router();

// const updatePlatController = require("../../../controllers/updatePlatController.js");
const initialPostController = require("../../../controllers/initialDataPostController");

router.route("/")
    .post(initialPostController.initialDataPostLOL)

module.exports = router;
