const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userFortniteDataModel = new Schema({
  userAccountName: {
    type:String,
    // type: Schema.Types.ObjectId,
    // ref: "userProfileInformation",
  },
  totalKills: String,
  kdRatio: String,
  winRate: String,
  totalWins: String,
  totalMatches: String,
  timePlayed: String,
  Date: {
    type: Date,
    default: Date.now
  },
});

var fortniteData = mongoose.model("fortniteData", userFortniteDataModel);

module.exports = fortniteData;

// db.fortniteData.insertOne({totalKills: "875", kdRatio:"2.04",winRate:"5.71%",wins:"26",totalMatches:"455",timePlayed:"51.43",userAccountName:"Chaelor"})