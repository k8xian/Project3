const express = require("express");
// express-promise-router gets rid of try/catches in controller.js
const router = require("express-promise-router")();

const UsersController = require("../controllers/users");

router.route("/signup").post(UsersController.signUp);

router.route("/signin").post(UsersController.signIn);

router.route("/secret").get(UsersController.secret);

module.exports = router;
