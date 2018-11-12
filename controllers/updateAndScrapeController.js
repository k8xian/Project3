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
                { $set: { "Fortnite.Platform": req.body.Platform, "Fortnite.UID": req.body.UID } },
                { new: true })
            .then(() => {
                console.log("Testing this");
            })
            .catch(err => console.log(err));
        scrape.scrapeFortnite(req.body)
            .then(scrapeRes => db.fortniteData.create(scrapeRes))
            .catch(err => console.log(err));
    },
    updateAndScrapeLOL: (req, res) => {
        db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
            .update({ "userAccountName": req.body.userAccountName },
                { $set: { "LOL.Platform": req.body.Platform, "LOL.UID": req.body.UID } },
                { new: true })
            .then(dbRes => {
                console.log(dbRes);
            })
            .catch(err => console.log(err));
        scrape.scrapeLOL(req.body)
            .then(scrapeRes => db.lolData.create(scrapeRes))
            .catch(err => console.log(err));
    },
    updateAndScrapeOverwatch: (req, res) => {
        db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
            .update({ "userAccountName": req.body.userAccountName },
                { $set: { "Overwatch.Platform": req.body.Platform, "Overwatch.UID": req.body.UID } },
                { new: true })
            .then(dbRes => {
                res.json(dbRes);
            })
            .catch(err => console.log(err));
        scrape.scrapeLOL(req.body)
            .then(scrapeRes => db.lolData.create(scrapeRes))
            .catch(err => console.log(err));
    },
    updateAndScrapeHalo5: (req, res) => {
        db.userProfileInformation //TODO: This "userAccountName" reference might have to switch depending on John's models
            .update({ "userAccountName": req.body.userAccountName },
                { $set: { "Halo5.UID": req.body.UID } },
                { new: true })
            .then(dbRes => {
                res.json(dbRes);
            })
            .catch(err => console.log(err));
        scrape.scrapeLOL(req.body)
            .then(scrapeRes => db.lolData.create(scrapeRes))
            .catch(err => console.log(err));
    },
}