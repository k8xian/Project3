const db = require("../models");

module.exports = ({
    getProfileInformation: (req, res) => {
      console.log("This is being hit");
      console.log(req.params.id);
        db.userProfileInformation //this req.query.id will probably change in the future
            .findOne({"userAccountName" : req.params.id})
            .then(dbRes => console.log(dbRes))
            .catch(err => res.status(422).json(err));
    },
})