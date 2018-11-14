const db = require("../models");

module.exports = ({
  getFortniteData: (req, res) => {
    console.log("This was hit");
    console.log(req.params.id)
    db.fortniteData //this req.params.id will probably change in the future
      .findOne({ "userAccountName": req.params.id })
      .then(dbRes => console.log(dbRes))
      .catch(err => res.status(422).json(err));
  },
  getHalo5Data: (req, res) => {
    db.halo5Data //this req.params.id will probably change in the future
      .findOne({ "userAccountName": req.params.id })
      .then(dbRes => res.json(dbRes))
      .catch(err => res.status(422).json(err));
  },
  getLOLData: (req, res) => {
    db.lolData //this req.params.id will probably change in the future
      .findOne({ "userAccountName": req.params.id })
      .then(dbRes => res.json(dbRes))
      .catch(err => res.status(422).json(err));
  },
  getOverwatchData: (req, res) => {
    db.overwatchData //this req.params.id will probably change in the future
      .findOne({ "userAccountName": req.params.id })
      .then(dbRes => res.json(dbRes))
      .catch(err => res.status(422).json(err));
  },
})