const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userLOLDataModel = new Schema({
  userAccountName: {
    type: String,
    // type: Schema.Types.ObjectId,
    // ref: "user",
  },
  playerRank: String,
  playerQueue: String,
  globalRank: String,
  leaguePoints: String,
  record: String,
  rankImg: String,
  Date: {
    type: Date,
    default: Date.now
  },
});

var lolData = mongoose.model("lolData", userLOLDataModel);

module.exports = lolData;

// db.lolData.insertOne({playerRank: "Gold III", playerQueue:"I do",globalRank:"Over 9000",leaguePoints:"71%",record:"455",rankImg:"51.43",userAccountName:"Chaelor"})