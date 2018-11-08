const User = require('../models/user')

module.exports = {
    signUp: async (req, res, next) => {
      console.log(".signUp() called!");
      console.log('contents of req.value.body', req.value.body)

      const { email, password } = req.value.body;

      // validate if user containing email alreadt exists
      const foundUser = await User.findOne({ email: email});
      if (foundUser) { 
          return res.status(403).json({ error: 'Email is already in use' });
        }

      // if a new user, create one
      const newUser = new User({
          email: email,
          password: password
      });
      // async await to make sure new user gets stored in db before moving on
      await newUser.save()

      // response with token
      res.json({ user: 'created' })
    },
    signIn: async (req, res, next) => {
        // Generate Token
      console.log(".signIn() called!");
    },
    secret: async (req, res, next) => {
      console.log(".secret() called!");
    }
  };