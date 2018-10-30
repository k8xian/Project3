// const router = require('express').Router();
// const passport = require('passport');
// // auth login
// router.get('/login', (req, res) => {
//     res.render('login');
// });

// // auth logout
// router.get('/logout', (req, res) => {
//     // handle with passport
//     res.send('logging out');
// })

// // auth with google
// router.get('/google', passport.authenticate('google', {
//     scope: ['profile']
// }));

// // callback route for google to redirect with passport middleware
// // passport middleware will take the authorization code and exchange it for profile information
// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//     //can comment the res.send(req.user) out once another route for profiles is created
//     res.send(req.user);
//     //we can send now direct this data where we want it
// });


// // auth with facebook

// module.exports = router;