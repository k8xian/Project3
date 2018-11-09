const express = require('express');
// const router = express.Router();
const router = require('express-promise-router')();
const passport = require('passport');


const { validateBody, schemas } = require('../helpers/routeHelpers')
const UsersController = require('../controllers/users')

// if client makes post request to this route with a body of some data, it will first be validated..
// ...with Joi in routeHelpers.js. Then when validate, it will route to controllers/users.js
router.route('/signup').post(validateBody(schemas.authSchema), UsersController.signUp); // exchang email and password for token
router.route('/signin').post(UsersController.signIn); // exchange email and password for token
router.route('/secret').get(passport.authenticate('jwt', { session: false}), UsersController.secret); // hold the token now because we're logged now

module.exports = router;

