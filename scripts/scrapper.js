const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  //Scrape OW
  //To use these, you will need the data from
  //req.query.NAMEHERE
  //That will return the data
  scrapeOverwatch: (req, res) => {
    console.log("Scrapper ");
    console.log(req);
    //Platforms = xbl, psn, pc
    //Website www.overbuff.com
    //Kitcy -- This is a public profile -- xbl
    //ZJones87 -- This is a private profile --xbl
    //Chaelor-1443

    //This is the route to scrape
    //req.platform = what platform the user plays on
    //req.UID = the user's ID
    return axios.get("https://playoverwatch.com/en-us/career/"
      + req.Platform + "/" + req.UID)
      .then((response) => {

        //load reponse data into cheerio
        let $ = cheerio.load(response.data);

        //These are variables that I will need to target and where to scrape data
        let masthead = $("div.masthead-player");
        let compRankImg = $("div.competitive-rank img");
        let compRank = $("div.competitive-rank .h5");
        let displayName = $("h1.header-masthead ");
        let rankIcon;
        let playerCompRank;

        //If it is undefined either tell them profile is private or return rank image
        if (compRankImg[0] === undefined) {
          rankIcon = "Sorry, not found! Is your profile private?"
        } else {
          rankIcon = compRankImg[0].attribs.src;
        }

        //If it is undefined either tell them profile is private or return rank
        if (compRank[1] === undefined) {
          playerCompRank = "Sorry, not found! Is your profile private?"
        } else {
          playerCompRank = compRank[1].children[0].data
        }


        let playerData = {}
        //Put all of the data into an object
        if (req.userAccountName) {
          playerData = {
            userAccountName: req.userAccountName,
            playerIcon: masthead[0].children[0].attribs.src,
            rankIcon: rankIcon,
            compRank: playerCompRank,
            displayName: displayName.text(),
          };
        } else {
          playerData = {
            playerIcon: masthead[0].children[0].attribs.src,
            rankIcon: rankIcon,
            compRank: playerCompRank,
            displayName: displayName.text(),
          };
        }

        console.log("Scrapped Data");
        console.log(playerData);
        //Console log and return object
        return playerData;
      })
      .catch(err => res.status(422).json(err));
  },
  //Scrape fortnite
  scrapeFortnite: (req, res) => {
    //xbox pc ps4
    //const URL = "https://fortnitestats.net/profile/{pc}/{Chaelor}"

    //req.platform = what platform they play on
    //req.UID = the user's ID
    return axios.get("https://fortnitestats.net/profile/"
      + req.Platform + "/" + req.UID)
      .then((response) => {
        //Load response data into cheerio
        let $ = cheerio.load(response.data);
        //We will return this array after pushing objects to it.
        let playerDataArr = [];

        $("div.panel-body").each(function (i, el) {
          //Val will be the value retrieved from the h3
          //Stat def will be the associated stat definition
          let val = $(this).find("h3").text().trim();
          let statDef = $(this).find("p").text().trim();

          //If there is a value and if the value has a definition
          //This will fire and put it all together
          if (val && statDef) {

            let playerData = {
              val: val,
              statDef: statDef,
            }

            playerDataArr.push(playerData);
          }
        });
        let saveToDB = {
          totalKills: playerDataArr[0].val,
          kdRatio: playerDataArr[1].val,
          winRate: playerDataArr[2].val,
          totalWins: playerDataArr[3].val,
          gamesPlayed: playerDataArr[4].val,
          timePlayed: playerDataArr[5].val,
        }
        return saveToDB;
      })
      .catch(err => res.status(422).json(err));
  },
  //Scrape League
  scrapeLOL: (req, res) => {
    //server = kr, na, euw, eune, br, etc
    //https://www.leagueofgraphs.com/summoner/kr/KZ+Cuzz -- top player
    //https://www.leagueofgraphs.com/summoner/na/Chaelor -- unranked
    //https://www.leagueofgraphs.com/summoner/na/foxifi -- bronze 3

    //req.platform = the server the user plays on
    //req.UID = the username of the player
    return axios.get("https://www.leagueofgraphs.com/summoner/"
      + req.Platform + "/" + req.UID)
      .then((response) => {

        //Load the returned data into cheerio
        let $ = cheerio.load(response.data);

        //Using the retrieved data from Cheerio
        //Store them into a variable which is where we will scrape from
        let playerRankImg;
        let playerRank = $("span.leagueTier");
        let playerQueue = $("span.queue");
        let playerGlobalRanking = $("span.black");
        let playerLeaguePoints = $("span.league-points");
        let playerRecord = $("span.wins");


        //If the player is unranked, return this
        if (playerRank.text() === "Unranked") {

          let playerData = {
            message: "You are not ranked"
          }

          return playerData
          //If the player is ranked, return the rank data
        } else {

          //This will find the image associated with the rank of the player
          switch (playerRank.text()) {
            case 'Bronze I':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/1-1.png";
              break;
            case 'Bronze II':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/1-2.png";
              break;
            case 'Bronze III':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/1-3.png";
              break;
            case 'Bronze IV':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/1-4.png";
              break;
            case 'Bronze V':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/1-5.png";
              break;
            case 'Silver I':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/2-1.png";
              break;
            case 'Silver II':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/2-2.png";
              break;
            case 'Silver III':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/2-3.png";
              break;
            case 'Silver IV':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/2-4.png";
              break;
            case 'Silver V':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/2-5.png";
              break;
            case 'Gold I':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/3-1.png";
              break;
            case 'Gold II':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/3-2.png";
              break;
            case 'Gold III':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/3-3.png";
              break;
            case 'Gold IV':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/3-4.png";
              break;
            case 'Gold V':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/3-5.png";
              break;
            case 'Platinum I':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/4-1.png";
              break;
            case 'Platinum II':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/4-2.png";
              break;
            case 'Platinum III':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/4-3.png";
              break;
            case 'Platinum IV':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/4-4.png";
              break;
            case 'Platinum V':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/4-5.png";
              break;
            case 'Diamond I':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/5-1.png";
              break;
            case 'Diamond II':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/5-2.png";
              break;
            case 'Diamond III':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/5-3.png";
              break;
            case 'Diamond IV':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/5-4.png";
              break;
            case 'Diamond V':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/5-5.png";
              break;
            case 'Master I':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/6-1.png";
              break;
            case 'Challenger':
              playerRankImg = "https://cdn.leagueofgraphs.com/img/league-icons/160/7-1.png";
              break;
          }

          let playerData = {};
          //This is the object to be returned
          if (req.userAccountName) {
            playerData = {
              userAccountName: req.userAccountName,
              playerRank: playerRank.text(),
              playerQueue: playerQueue.text(),
              globalRank: playerGlobalRanking.text(),
              leaguePoints: playerLeaguePoints.text(),
              record: playerRecord.text(),
              rankImg: playerRankImg
            }
          } else {
            playerData = {
              playerRank: playerRank.text(),
              playerQueue: playerQueue.text(),
              globalRank: playerGlobalRanking.text(),
              leaguePoints: playerLeaguePoints.text(),
              record: playerRecord.text(),
              rankImg: playerRankImg
            }
          }

          //See the data in the backend, return the above created oject
          //It contains players:
          //Rank, queue type, global rank,
          //League points, record, and the rank image.
          return playerData
        }
      })
      .catch(err => res.status(422).json(err));
  },
  //Scrape Halo 5
  scrapeHalo5: (req, res) => {
    console.log(req);
    //http://halotracker.com/h5/player/Naded
    //req.UID = username of the player
    return axios.get("http://halotracker.com/h5/player/" + req.UID)
      .then((response) => {
        //load response into cheerio
        let $ = cheerio.load(response.data);

        //An array that we will return later will all of the fetched data
        let playerDataArr = [];

        $("div.stats-stat").each(function (i, el) {
          //These are the variables text that we will grab
          let name = $(this).find("div.name").text().trim();
          let rank = $(this).find("div.rank").text().trim();
          let val = $(this).find("div.value").text().trim();


          if (name && val) {
            let playerData = {
              statDef: name,
              playerRank: rank,
              val: val,
            }

            playerDataArr.push(playerData);
          }
        });
        let saveToDB = {}

        if (req.userAccountName) {
          saveToDB = {
            userAccountName: req.userAccountName,
            kdRatio: playerDataArr[2].val,
            killsPerGame: playerDataArr[5].val,
            headshotPercent: playerDataArr[7].val,
            winRate: playerDataArr[8].val,
            gamesPlayed: playerDataArr[9].val,
            timePlayed: playerDataArr[12].val,
          }
        } else {
          saveToDB = {
            kdRatio: playerDataArr[2].val,
            killsPerGame: playerDataArr[5].val,
            headshotPercent: playerDataArr[7].val,
            winRate: playerDataArr[8].val,
            gamesPlayed: playerDataArr[9].val,
            timePlayed: playerDataArr[12].val,
          }
        }
        return saveToDB;
      })
      .catch(err => res.status(425).json(err));
  },
}