const express = require('express');
// const router = express.Router();
const router = require('express-promise-router')();


const { validateBody, schemas } = require('../helpers/routeHelpers')
const UsersController = require('../controllers/users')

// if client makes post request to this route with a body of some data, it will first be validated..
// ...with Joi in routeHelpers.js. Then when validate, it will route to controllers/users.js
router.route('/signup').post(validateBody(schemas.authSchema), UsersController.signUp);
router.route('/signin').post(UsersController.signIn);
router.route('/secret').get(UsersController.secret);

module.exports = router;

