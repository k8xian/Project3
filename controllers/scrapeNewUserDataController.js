const scrapper = require("../scripts/scrapper.js");
const db = require("../models");

// TODO: Make it so that these scrape data, then adds it to a data base
// That way we can show old data on initial load then maybe have a button
// That users may click that findOneAndUpdates the data. 
// This button would be public that anyone can click 
// It would compare the dates in the data base and if it is over an hour old
// We would allow the button to be clickable and get new data

// I made this a TODO because it seems like a lot.

//This will probably need to chane
module.exports = {
  getNewFortniteData: (req, res) => {
    return scrapper.scrapeFortnite(req.body)
      .then(scrapeRes => {
        //return user data?
        db.fortniteData //TODO: This "userAccountName" reference might have to switch depending on John's models
          .findOneAndUpdate({ "userAccountName": req.params.id },
            {
              $set: {
                "totalKills": scrapeRes.totalKills,
                "kdRatio": scrapeRes.kdRatio,
                "winRate": scrapeRes.winRate,
                "totalWins": scrapeRes.totalWins,
                "totalMatches": scrapeRes.totalMatches,
                "timePlayed": scrapeRes.timePlayed,
              }
            })
          .then((dbRes) => {
            return res.json(scrapeRes);
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  getNewHalo5Data: (req, res) => {
    return scrapper.scrapeHalo5(req.body)
      .then(scrapeRes => {
        //return user data?
        db.halo5Data //TODO: This "userAccountName" reference might have to switch depending on John's models
          .findOneAndUpdate({ "userAccountName": req.params.id },
            {
              $set: {
                "kdRatio": scrapeRes.kdRatio,
                "killsPerGame": scrapeRes.killsPerGame,
                "headshotPercent": scrapeRes.headshotPercent,
                "winRate": scrapeRes.winRate,
                "gamesPlayed": scrapeRes.gamesPlayed,
                "timePlayed": scrapeRes.timePlayed,
              }
            })
          .then((dbRes) => {
            return res.json(scrapeRes);
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  getNewLOLData: (req, res) => {
    return scrapper.scrapeLOL(req.body)
      .then(scrapeRes => {
        //return user data?
        db.lolData //TODO: This "userAccountName" reference might have to switch depending on John's models
          .findOneAndUpdate({ "userAccountName": req.params.id },
            {
              $set: {
                "playerRank": scrapeRes.playerRank,
                "playerQueue": scrapeRes.playerQueue,
                "globalRank": scrapeRes.globalRank,
                "leaguePoints": scrapeRes.leaguePoints,
                "record": scrapeRes.record,
                "rankImg": scrapeRes.rankImg,
              },
            })
          .then((dbRes) => {
            return res.json(scrapeRes);
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  getNewOverwatchData: (req, res) => {
    return scrapper.scrapeOverwatch(req.body)
      .then(scrapeRes => {
        //return user data?
        db.overwatchData //TODO: This "userAccountName" reference might have to switch depending on John's models
          .findOneAndUpdate({ "userAccountName": req.params.id },
            {
              $set: {
                "playerIcon": scrapeRes.playerIcon,
                "rankIcon": scrapeRes.rankIcon,
                "compRank": scrapeRes.compRank,
                "displayName": scrapeRes.displayName,
              }
            },
            { new: true })
          .then((dbRes) => {
            return res.json(scrapeRes);
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
}