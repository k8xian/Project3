const router = require("express").Router();

const createAccountController = require("../controllers/createAccountController.js");

//This matches /api/userAccount
router.route("/")
    .post(createAccountController.create);

module.exports = router;
