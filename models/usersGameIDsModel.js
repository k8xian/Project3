const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var userGameIDsModel = new Schema ({
    //Will this need to be on a google or a twitch ID?
    userAccountName: {
        type: String,
        //TODO: Change this reference when given the correct models for users
        //BE SURE THIS REFERENCE IS UNIQUE
        ref: "Users",
    },
    //This should only be a UID
    //IBlameLee, Naded, etc
    Halo5: {
        UID: String,
    },
    //This should be platform:
    //xbox, pc, ps4
    //UID:
    // Ninja, Chaelor, ZJones87
    Fortnite: {
        Platform: String,
        UID: String,
    },
    //This should be server(Platform):
    //br, eune, euw, lan, las, na, oce, ru, tr, jp, sea, kr, cn
    //UID foxifi, KZ+KUZZ, spaces get replaced with a + mark
    LOL: {
        Platform: String,
        UID: String,
    },
    //This should be Platform
    //xlb, psn, pc
    //UID: Kitcy(psn/xbl) NAMEHERE-XXXX(pc): Chaelor-1443
    Overwatch: {
        Platform: String,
        UID: String,
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

var userGameIDs = mongoose.model("userGameIDs", userGameIDsModel);

module.exports = userGameIDs;
