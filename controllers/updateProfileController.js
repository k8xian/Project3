const db = require("../models");

//How this works:
//The controllers will look for userAccountNames matching what userAccountName
//is grabbed from the front end.
//When it finds the matching userAccountName it will
//Set the oldUID entry to the new one.

module.exports = {
    SaveBio: (req, res) => {
        console.log(req.body);
        profile.bio 
            .findOneAndUpdate({ "userAccountName" : req.body.bio },
                { $set: { "userAccountName": req.body.bio } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
    addTwitch: (req, res) => {
        console.log(req.body);
        profile.addTwitch 
            .findOneAndUpdate({ "userAccountName" : req.body.addTwitch },
                { $set: { "userAccountName": req.body.addTwitch } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
    addTwitter: (req, res) => {
        console.log(req.body);
        profile.AddTwitter
            .findOneAndUpdate({ "userAccountName" : req.body.AddTwitter },
                { $set: { "userAccountName": req.body.AddTwitter} },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    },
    addInstagram: (req, res) => {
        console.log(req.body);
        profile.addInstagram 
            .findOneAndUpdate({ "userAccountName" : req.body.addInstagram },
                { $set: { "userAccountName": req.body.addInstagram } },
                { new: true })
            .then(dbRes => {
                console.log("Hello");
                res.json(dbRes);
            })
            .catch(err => console.log(err));
    };