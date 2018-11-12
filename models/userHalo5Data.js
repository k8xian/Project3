const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userHalo5DataModel = new Schema({
    userAccountName: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    KDA: String,
    killsPerGame: String,
    headshotPercent: String,
    winRate: String,
    gamesPlayed: String,
    timePlayed: String,
});

var halo5Data = mongoose.model("halo5Data", userHalo5DataModel);

module.exports = halo5Data;
