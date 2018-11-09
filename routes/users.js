const express = require("express");
// const router = express.Router();
const router = require("express-promise-router")();
const passport = require("passport");
const passportConf = require("../passport");

const { validateBody, schemas } = require("../helpers/routeHelpers");
const UsersController = require("../controllers/users");
const passportSignIn = passport.authenticate("local", { session: false });
const passportJWT = passport.authenticate("jwt", { session: false });

// if client makes post request to this route with a body of some data, it will first be validated..
// ...with Joi in routeHelpers.js. Then when validate, it will route to controllers/users.js
router
  .route("/signup")
  .post(validateBody(schemas.authSchema), UsersController.signUp); // exchang email and password for token

router
  .route("/signin")
  .post(
    validateBody(schemas.authSchema),
    passportSignIn,
    UsersController.signIn
  ); // exchange email and password for token

router.route('/oauth/google')
    .post(passport.authenticate('googleToken', { session: false }));

router
  .route("/secret")
  .get(
    passportJWT,
    UsersController.secret
  ); // hold the token now because we're logged now
// whenever our request comes to /secret, it will first go through passport to confirm token^^
module.exports = router;
