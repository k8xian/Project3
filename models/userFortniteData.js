const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userFortniteDataModel = new Schema({
    userAccountName: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    totalKills: String,
    kdRatio: String,
    winRate: String,
    totalWins: String,
    totalMatches: String,
    timePlayed: String,
});

var fortniteData = mongoose.model("fortniteData", userFortniteDataModel);

module.exports = fortniteData;
