const JWT = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

signToken = user => {
  return JWT.sign(
    {
      iss: "Project3", // name
      sub: user.id, // using a user's mongo_db unique id
      iat: new Date().getTime(), // current time
      exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day
    },
    process.env.JWT_SECRET
  ); // secret to encode token
};

module.exports = {
  signUp: async (req, res, next) => {
    console.log(".signUp() called!");
    console.log("contents of req.value.body", req.value.body);

    const { email, password } = req.value.body;

    // validate if user containing email alreadt exists
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      return res.status(403).json({ error: "Email is already in use" });
    }

    // if a new user, create one
    const newUser = new User({
      email: email,
      password: password
    });
    await newUser.save(); // async await to make sure new user gets stored in db before moving on

    // Generate the token
    const token = signToken(newUser);

    // response with token
    res.status(200).json({ token: token });
  },
  signIn: async (req, res, next) => {
    // Generate Token
    console.log(".signIn() called!");
  },
  secret: async (req, res, next) => {
    console.log("i managed to get here");
    res.json({ secret: "resource" })
  }
};
