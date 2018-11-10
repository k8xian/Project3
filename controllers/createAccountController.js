const db = require("../models");

/***************************** 
This should be run after a user gets their account 
Authenticated by passport, facebook, twitch, google, etc.
It should just make an entry into the database containing
The unique user name and empty everything else.

This should post the userName of the account
And empty objects for updating
So in the model it will end up looking like

userAccountName <== This should be a reference to how we are calling other names
Fortnite: {
    Platform: "",
    UID: "",
},
Halo5: {
    Halo5 does not need a platform, so disregard
    UID: "",
},
LOL: {
    Platform: "",
    UID: "",
},
Overwatch{
    Platform: "",
    UID: "",
}

*****************************/

module.exports = {
    create: function (req, res) {
        db.userProfileInformation
            .create(req.body)
            .then(dbRes => res.json(dbRes))
            .catch(err => res.status(422).json(err));
    }
}