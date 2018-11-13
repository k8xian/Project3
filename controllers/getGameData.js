const db = require("../models");

module.exports = ({
    getFortniteData: (req, res) => {
        db.fortnite5Data //this req.query.id will probably change in the future
            .findOne({"userAccountName" : req.query.id})
            .then(dbRes => res.json(dbRes))
            .catch(err => res.status(422).json(err));
    },
    getHalo5Data: (req, res) => {
        db.halo5Data //this req.query.id will probably change in the future
            .findOne({"userAccountName" : req.query.id})
            .then(dbRes => res.json(dbRes))
            .catch(err => res.status(422).json(err));
    },
    getLOLData: (req, res) => {
        db.lolData //this req.query.id will probably change in the future
            .findOne({"userAccountName" : req.query.id})
            .then(dbRes => res.json(dbRes))
            .catch(err => res.status(422).json(err));
    },
    getOverwatchData: (req, res) => {
        db.overwatchData //this req.query.id will probably change in the future
            .findOne({"userAccountName" : req.query.id})
            .then(dbRes => res.json(dbRes))
            .catch(err => res.status(422).json(err));
    },
})