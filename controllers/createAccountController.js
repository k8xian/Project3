const db = require("../models");

/***************************** 
This should be run after a user gets their account 
Authenticated by passport, facebook, twitch, google, etc.
It should just make an entry into the database containing
The unique user name and empty everything else.

This should post the userName of the account
And empty objects for updating

There are defaults in the model to automatically populate 
all of the areas for users

*****************************/

module.exports = {
    create: function (req, res) {
        //The only thing in req.body should be a userAccountName
        db.userProfileInformation
            .create(req.body)
            .then(dbRes => res.json(dbRes))
            .catch(err => res.status(422).json(err));
    }
}