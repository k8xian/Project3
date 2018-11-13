//Require the models made from the models folder.
const db = require("../models");

//How this works:
//The controllers will look for userAccountNames matching what userAccountName
//is grabbed from the front end.
//When it finds the matching userAccountName it will
//Set the oldUID entry to the new one.

module.exports = {
    updateHalo5UID: (req, res) => {
        console.log(req.body);
        db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
            .findOneAndUpdate({ "userAccountName" : req.body.userAccountName },
                { $set: { "Halo5.UID": req.body.UID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => res.status(422).json(err));
    },
    updateFortniteUID: (req, res) => {
        db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "Fortnite.UID": req.body.UID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => res.status(422).json(err));
    },
    updateLOLUID: (req, res) => {
        db.userProfileInformation//TODO: This "userAccountName" reference might have to switch depending on John's models
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "LOL.UID": req.body.UID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => res.status(422).json(err));
    },
    updateOverwatchUID: (req, res) => {
        db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "Overwatch.UID": req.body.UID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => res.status(422).json(err));
    },
};
