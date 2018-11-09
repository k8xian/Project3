const db = require("../models");

//This should be run after a user gets their account 
//Authenticated by passport, facebook, twitch, google, etc.
//It should just make an entry into the database containing
//The unique user name and empty everything else.

module.exports = {
    create: function (req, res) {
        db.userGameIDs
            .create(req.body)
            .then(dbRes => res.json(dbRes))
            .catch(err => res.status(422).json(err));
    }
}