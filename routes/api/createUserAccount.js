const router = require("express").Router();
// const userAccountsController = require("../../controllers/createAccountController.js");
const createAccountController = require("../../controllers/createAccountController.js");

//This matches /api/userAccount
router.route("/")
    .post(createAccountController.create);

module.exports = router;
