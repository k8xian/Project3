const scrapper = require("../scripts/scrapper.js");
const db = require("../models");

//How this works:
//The controllers will look for userAccountNames matching what userAccountName
//is grabbed from the front end.
//When it finds the matching userAccountName it will
//Set the oldPlatform entry to the new one.

// Might need to add this:
// scrape.scrapeLOL(req.body)
//       .then(scrapeRes => db.lolData.create(scrapeRes))
//       .catch(err => res.status(422).json(err));

module.exports = {

  updateFortnitePlatform: (req, res) => {
    db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
      .findOneAndUpdate({ "userAccountName": req.params.id },
        { $set: { "Fortnite.Platform": req.body.newPlatform } },
        { new: true })
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(err => res.status(422).json(err));

  },
  updateLOLPlatform: (req, res) => {
    db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
      .findOneAndUpdate({ "userAccountName": req.params.id },
        { $set: { "LOL.Platform": req.body.newPlatform } },
        { new: true })
      .then(dbRes => {
        console.log("Hello");
        res.json(dbRes);
      })
      .catch(err => res.status(422).json(err));
  },
  updateOverwatchPlatform: (req, res) => {
    db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
      .findOneAndUpdate({ "userAccountName": req.params.id },
        { $set: { "Overwatch.Platform": req.body.newPlatform } },
        { new: true })
      .then(dbRes => {
        console.log("Hello");
        res.json(dbRes);
      })
      .catch(err => res.status(422).json(err));
  },
};