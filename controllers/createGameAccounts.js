const db = require("../models");
//This will make a DB entry
//This should be called when a new account is made, then using the update controller
// we should just update the information there after an account is created
module.exports = {
    create: function (req, res) {
        db.UserAccounts
            .create(req.body)
            .then(dbRes => res.json(dbRes))
            .catch(err => res.status(422).json(err));
    }
}