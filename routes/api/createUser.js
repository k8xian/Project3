const router = require("express").Router();
const userAccountsController = require("../../controllers/userAccountsController.js");

//This matches /api/userAccount
router.route("/")
    .post(userAccountsController.create);

module.exports = router;