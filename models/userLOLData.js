const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userLOLDataModel = new Schema({
    userAccountName: {
        type: Schema.Types.ObjectId,
        ref: "user",
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
