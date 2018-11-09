const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var usersGamesSchema = new Schema({
    //Will this need to be on a google or a twitch ID?
    //This might need to be a session ID indicator
    // ownerUser: {
    //     type: String,
    //     ref: "Users"
    // },
    //This should only be a UID
    //IBlameLee, Naded, etc
    Halo5: {
        UID: String,
    },
    //This should be platform:
    //xbox, pc, ps4
    //UID Ninja, Chaelor, ZJones87
    Fortnite: {
        platform: String,
        UID: String,
    },
    //This should be server(platform):
    //br, eune, euw, lan, las, na, oce, ru, tr, jp, sea, kr, cn
    //UID foxifi, KZ+KUZZ, spaces get replaced with a + mark
    LOL: {
        platform: String,
        UID: String,
    },
    //This should be platform
    //xlb, psn, pc
    //UID: Kitcy(psn/xbl) NAMEHERE-XXXX(pc): Chaelor-1443
    Overwatch: {
        platform: String,
        UID: String,
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

var usersGames = mongoose.model("usersGames", usersGamesSchema);

module.exports = usersGames;
