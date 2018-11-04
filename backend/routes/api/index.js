const router = require("express").Router();

//const require every route that is in here
//const fetch = require("./fetch");
const fnRoute = require("./fnScrape");
const h5Route = require("./h5Scrape");
const lolRoute = require("./lolScrape");
const owRoute = require("./owScrape");

//then do router.use("/route", nameofthing);  example below
//router.use("/fetch", fetch);
router.use("/fortnite", fnRoute);
router.use("/halo5", h5Route);
router.use("/lol", lolRoute);
router.use("/overwatch", owRoute);

module.exports = router;

/*In react it should look something like this 
THIS GOES IN THE COMPONENT 
API WILL BE IMPORTED FROM A UTILS FOLDER

getGAMENAMEHERE = () => 
    API.getGAMENAMEHERE({
        UID: this.state.UID
        platform: this.state.platform
    })
    .then(res => 
        this.setState({

        })
        )
        .catch(err => console.log(err));
*/