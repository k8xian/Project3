const scrapper = require("../scripts/scrapper.js");

// TODO: Make it so that these scrape data, then adds it to a data base
// That way we can show old data on initial load then maybe have a button
// That users may click that updates the data. 
// This button would be public that anyone can click 
// It would compare the dates in the data base and if it is over an hour old
// We would allow the button to be clickable and get new data

// I made this a TODO because it seems like a lot.

module.exports = {
    getNewFortniteData: (req, res) => {
        return scrapper.scrapeFortnite(req.body)
            .then(scrapeRes => {
                //return user data?
                return res.json(scrapeRes);
            })
            .catch(err => console.log(err));
    },
    getNewHalo5Data: (req, res) => {
        return scrapper.scrapeHalo5(req.body)
            .then(scrapeRes => {
                //return user data?
                return res.json(scrapeRes);
            })
            .catch(err => console.log(err));
    },
    getNewLOLData: (req, res) => {
        return scrapper.scrapeLOL(req.body)
            .then(scrapeRes => {
                //return user data?
                return res.json(scrapeRes);
            })
            .catch(err => console.log(err));
    },
    getNewOverwatchData: (req, res) => {
        return scrapper.scrapeOverwatch(req.body)
            .then(scrapeRes => {
                //return user data?
                return res.json(scrapeRes);
            })
            .catch(err => console.log(err));
    },
}