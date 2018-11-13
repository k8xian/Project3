const db = require("../models");

//How this works:
//The controllers will look for userAccountNames matching what userAccountName
//is grabbed from the front end.
//When it finds the matching userAccountName it will
//Set the oldUID entry to the new one.

module.exports = {
    updateBio: (req, res) => {
        console.log(req.body);
        db.userProfileInformation
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "userAccountName": req.body.updateBio } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => res.status(422).json(err));
    },
    updateTwitch: (req, res) => {
        console.log(req.body);
        db.userProfileInformation
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "userAccountName": req.body.updateTwitch } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => res.status(422).json(err));
    },
    updateTwitter: (req, res) => {
        console.log(req.body);
        db.userProfileInformation
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "userAccountName": req.body.updateTwitter } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => res.status(422).json(err));
    },
    updateInstagram: (req, res) => {
        console.log(req.body);
        db.userProfileInformation
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "userAccountName": req.body.updateInstagram } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => res.status(422).json(err));
    },
    updateProfileImage: (req, res) => {
        console.log(req.body);
        db.userProfileInformation
            .findOneAndUpdate({ "userAccountName": req.body.userAccountName },
                { $set: { "userAccountName": req.body.ProfileImage } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => res.status(422).json(err));
    },
}