const express = require("express");
// express-promise-router gets rid of try/catches in controller.js
const router = require("express-promise-router")();
const app = express();

const UsersController = require("../controllers/users");




app.get('/', function (req, res) {
    res.send('hello world')
  })
// router.use("/signup").post(UsersController.signUp);

// router.use("/signup"), function (req, res){
// return Promise.
// })

// router.route("/signin").post(UsersController.signIn);

// router.route("/secret").get(UsersController.secret);

// module.exports = router;
