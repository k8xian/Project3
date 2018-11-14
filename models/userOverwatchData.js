const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userOverwatchDataModel = new Schema({
  userAccountName: {
    type: String,
    // type: Schema.Types.ObjectId,
    // ref: "user",
  },
  playerIcon: String,
  rankIcon: String,
  compRank: String,
  displayName: String,
  Date: {
    type: Date,
    default: Date.now
  },
});

var overwatchData = mongoose.model("overwatchData", userOverwatchDataModel);

module.exports = overwatchData;

// db.overwatchData.insertOne({playerIcon: "I have one", rankIcon:"I do",compRank:"3951",displayName:"Chaelor",userAccountName:"Chaelor"})