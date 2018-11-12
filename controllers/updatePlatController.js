const db = require("../models");

//How this works:
//The controllers will look for userAccountNames matching what userAccountName
//is grabbed from the front end.
//When it finds the matching userAccountName it will
//Set the oldPlatform entry to the new one.

module.exports = {
    
    updateFortnitePlatform: (req, res) => {
        db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "Fortnite.Platform": req.body.newPlatform } },
                { new: true })
            .then(dbRes => {
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },  
    updateLOLPlatform: (req, res) => {
        db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "LOL.Platform": req.body.newPlatform } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
    updateOverwatchPlatform: (req, res) => {
        db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "Overwatch.Platform": req.body.newPlatform } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
};