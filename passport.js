const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const { ExtractJwt } = require("passport-jwt");
const GooglePlusTokenStrategy = require('passport-google-plus-token');
require("dotenv").config();
const User = require("./models/user");

// JSON WEB TOKENS STRATEGY
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: process.env.JWT_SECRET
    },
    async (payload, done) => {
      try {
        // Find the user specificed in token
        const user = await User.findById(payload.sub);

        // If user doesn't exist, handle it
        if (!user) {
          return done(null, false);
        }

        // Otherwise, return the user
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// GOOGLE OAUTH STRATEGY
passport.use('googleToken', new GooglePlusTokenStrategy({
  clientID: process.env.GOOGLE_CLIENTID,
  clientSecret: process.env.GOOGLE_CLIENTSECRET
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
  
  
    // Check whether this current user exists in our db
    const existingUser = await User.findOne({ "google.id": profile.id })
    if (existingUser) {
      return done(null, existingUser);
    }
  
    // If new account
    const newUser = new User({
      method: 'google',
      google: {
        id: profile.id,
        email: profile.emails[0].value
      }
    });
  
    await newUser.save();
    done(null, newUser);
  } catch(error) {
    done(error, false, error.message);
  }
  
}));

// LOCAL STRATEGY
passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      try {
        // Find the user given the email
        const user = await User.findOne({ email });

        // If not, handle it
        if (!user) {
          return done(null, false);
        }

        // Check if the password is correct
        const isMatch = await user.isValidPassword(password);

        // If not, handle it
        if (!isMatch) {
          return done(null, false);
        }
        // Otherwise, return the user
        done(null, user);
      } catch (error) {
          done(error, false);
      }
    }
  )
);
