const db = require("../models");

module.exports = ({
  getProfileInformation: (req, res) => {
    db.userProfileInformation //this req.query.id will probably change in the future
      .findOne({ "userAccountName": req.params.id })
      .then(dbRes => res.json(dbRes))
      .catch(err => res.status(422).json(err));
  },
})