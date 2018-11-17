const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userFortniteDataModel = new Schema({
  userAccountName: {
    type: String,
    unique: true,
  },
  Date: {
    type: Date,
    default: Date.now
  },
  gamesPlayed: Number,
  kdRatio: Number,
  timePlayed: Number,
  totalKills: Number,
  totalWins: Number,
  winRate: String,
});

var fortniteData = mongoose.model("fortniteData", userFortniteDataModel);

module.exports = fortniteData;

// db.fortniteData.insertOne({totalKills: 875, kdRatio:2.04,winRate:5.71%,wins:26,totalMatches:455,timePlayed:51.43,userAccountName:"Chaelor"})