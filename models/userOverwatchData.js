const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userOverwatchDataModel = new Schema({
    userAccountName: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    playerIcon: String,
    rankIcon: String,
    compRank: String,
    displayName: String,
});

var overwatchData = mongoose.model("overwatchData", userOverwatchDataModel);    

module.exports = overwatchData;
