const db = require("../models");
const scrape = require("../scripts/scrapper.js");

//How this works:
//The controllers will look for userAccountNames matching what userAccountName
//is grabbed from the front end.
//When it finds the matching userAccountName it will
//Then updates both platform and UID

module.exports = {

  updateAndScrapeFortnite: (req, res) => {
    db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
      .update({ "userAccountName": req.body.userAccountName },
        { $set: { "Fortnite.Platform": req.body.Platform, "Fortnite.UID": req.body.UID, "Fortnite.isPopulated": true } },
        { new: true })
      .then(() => {
        //console.log("Testing this");
      })
      .catch(err => res.status(422).json(err));
    scrape.scrapeFortnite(req.body)
      .then(scrapeRes => db.fortniteData.create(scrapeRes))
      .catch(err => res.status(422).json(err));
  },
  updateAndScrapeLOL: (req, res) => {
    db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
      .update({ "userAccountName": req.body.userAccountName },
        { $set: { "LOL.Platform": req.body.Platform, "LOL.UID": req.body.UID, "LOL.isPopulated": true } },
        { new: true })
      .then(dbRes => {
        //console.log(dbRes);
      })
      .catch(err => res.status(422).json(err));
    scrape.scrapeLOL(req.body)
      .then(scrapeRes => db.lolData.create(scrapeRes))
      .catch(err => res.status(450).json(err));
  },
  updateAndScrapeOverwatch: (req, res) => {
    //console.log(req.body);
    db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
      .update({ "userAccountName": req.body.userAccountName },
        { $set: { "Overwatch.Platform": req.body.Platform, "Overwatch.UID": req.body.UID, "Overwatch.isPopulated": true } },
        { new: true })
      .then(dbRes => {
        //console.log(dbRes);
      })
      .catch(err => res.status(422).json(err));
    scrape.scrapeOverwatch(req.body)
      .then(scrapeRes => db.overwatchData.create(scrapeRes))
      .catch(err => res.status(450).json(err));
  },
  updateAndScrapeHalo5: (req, res) => {
    db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
      .update({ "userAccountName": req.body.userAccountName },
        { $set: { "Halo5.UID": req.body.UID, "Halo5.isPopulated": true } },
        { new: true })
      .then(dbRes => {
        scrape.scrapeHalo5(req.body)
          .then(scrapeRes => db.halo5Data.create(scrapeRes))
          .catch(err => res.status(450).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
}