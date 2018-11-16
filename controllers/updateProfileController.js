const db = require("../models");

//How this works:
//The controllers will look for userAccountNames matching what userAccountName
//is grabbed from the front end.
//When it finds the matching userAccountName it will
//Set the oldUID entry to the new one.

module.exports = {
  updateBio: (req, res) => {
    db.userProfileInformation
      .findOneAndUpdate({ "userAccountName": req.params.id },
        { $set: { "Bio": req.body.updateBio } },
        { new: true })
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(err => res.status(422).json(err));
  },
  updateTwitch: (req, res) => {
    db.userProfileInformation
      .findOneAndUpdate({ "userAccountName": req.params.id },
        { $set: { "Twitch": req.body.updateTwitch } },
        { new: true })
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(err => res.status(422).json(err));
  },
  updateTwitter: (req, res) => {
    db.userProfileInformation
      .findOneAndUpdate({ "userAccountName": req.params.id },
        { $set: { "Twitter": req.body.updateTwitter } },
        { new: true })
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(err => res.status(422).json(err));
  },
  updateInstagram: (req, res) => {
    db.userProfileInformation
      .findOneAndUpdate({ "userAccountName": req.params.id },
        { $set: { "Instagram": req.body.updateInstagram } },
        { new: true })
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(err => res.status(422).json(err));
  },
  updateProfileImage: (req, res) => {
    db.userProfileInformation
      .findOneAndUpdate({ "userAccountName": req.params.id },
        { $set: { "ProfileImage": req.body.updateProfileImage } },
        { new: true })
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(err => res.status(422).json(err));
  },
}