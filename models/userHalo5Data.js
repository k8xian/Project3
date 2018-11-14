const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userHalo5DataModel = new Schema({
  userAccountName: {
    type:String,
    // type: Schema.Types.ObjectId,
    // ref: "user",
  },
  kdRatio: Number,
  winRate: Number,
  gamesPlayed: Number,
  timePlayed: Number,
  killsPerGame: Number,
  headshotPercent: Number,
  Date: {
    type: Date,
    default: Date.now
  },
});

var halo5Data = mongoose.model("halo5Data", userHalo5DataModel);

module.exports = halo5Data;

// db.halo5Data.insertOne({KDA: "875", killsPerGame:"11",headshotPercent:"5.71%",winRate:"71%",gamesPlayed:"455",timePlayed:"51.43",userAccountName:"Chaelor"})