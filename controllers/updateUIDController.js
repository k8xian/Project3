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
        db.userGameIDs //TODO: This "userAccountName" reference might have to switch depending on John's models
            .findOneAndUpdate({ "userAccountName" : req.body.userAccountName },
                { $set: { "Halo5.UID": req.body.newUID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
    updateFortniteUID: (req, res) => {
        db.userGameIDs //TODO: This "userAccountName" reference might have to switch depending on John's models
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "Fortnite.UID": req.body.newUID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
    updateLOLUID: (req, res) => {
        db.userGameIDs//TODO: This "userAccountName" reference might have to switch depending on John's models
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "LOL.UID": req.body.newUID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
    updateOverwatchUID: (req, res) => {
        db.userGameIDs //TODO: This "userAccountName" reference might have to switch depending on John's models
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "Overwatch.UID": req.body.newUID } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
};