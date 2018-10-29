const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const GoogleUser = require("../models/google-model");

//serialize will allow the same person to login through any Oauth service without another...
//...db entry. This will give user a uniform profile through any means of authorization
passport.serializeUser((user, done) => {
    done(null, user.id);
    //id will be stuffed into a cookie!
});

//when the cookie comes back, this will take the id stored and find a user based on the id
passport.deserializeUser((id, done) => {
    GoogleUser.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      //options for the google strategy
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //check if user already exists in db
      GoogleUser.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          //already have the user
          console.log(`user is: ${currentUser}`);
          done(null, currentUser);
        } else {
          //if not, create user in our db
          new GoogleUser({
            username: profile.displayName,
            googleId: profile.id,
            gender: profile.gender,
            source: profile.provider,
            language: profile._json.language,
            image: profile._json.image.url
          })
            .save()
            .then(newUser => {
              console.log(`new user created: ${newUser}`);
              done(null, newUser);
            });
        }
      });
    }
  )
);
