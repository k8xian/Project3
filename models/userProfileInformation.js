const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//TODO: Add all profile information here
//When this is created after user is authenticated
//Make sure you make all of the created fields empty strings.
//After that we can just update/put all of the other things

var userProfileInformationModel = new Schema ({
    //Will this need to be on a google or a twitch ID?
    userAccountName: {
        type: Schema.Types.ObjectId,
        //TODO: Change this reference when given the correct models for users
        //BE SURE THIS REFERENCE IS UNIQUE
        ref: "user",
    },
    Bio: String,
    Twitch: String,
    Twitter: String,
    Instagram: String,
    ProfileImage:String, //maybe this should be a file? That would take up a lot of space
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

var userProfileInformation = mongoose.model("userProfileInformation", userProfileInformationModel);

module.exports = userProfileInformation;
