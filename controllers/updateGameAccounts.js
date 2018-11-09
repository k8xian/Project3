const db = require("../models");
//IF WE CHANGE JOSH'S DB, WE WILL NEED TO CHANGE IT HERE AND IN THE MODELS

module.exports = {
    updateHalo5: (req, res) => {
        db.UserAccounts /* INSTEAD OF Halo5.UID, FIND BY req.session THEN UPDATE */
            .findOneAndUpdate({ "Halo5.UID": req.body.oldID },
                { $set: { "Halo5.UID": req.body.UID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
    updateFortnite: (req, res) => {
        db.UserAccounts /* INSTEAD OF Fortnite.UID, FIND BY req.session THEN UPDATE */
            .findOneAndUpdate({ "Fortnite.UID": req.body.oldID },
                { $set: { "Fortnite.UID": req.body.UID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
    updateLOL: (req, res) => {
        db.UserAccounts /* INSTEAD OF LOL.UID, FIND BY req.session THEN UPDATE */
            .findOneAndUpdate({ "LOL.UID": req.body.oldID },
                { $set: { "LOL.UID": req.body.UID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
    updateOverwatch: (req, res) => {
        db.UserAccounts /* INSTEAD OF Overwatch.UID, FIND BY req.session THEN UPDATE */
            .findOneAndUpdate({ "Overwatch.UID": req.body.oldID },
                { $set: { "Overwatch.UID": req.body.UID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
};