const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//TODO: Add all profile information here
//When this is created after user is authenticated
//Make sure you make all of the created fields empty strings.
//After that we can just update/put all of the other things

var userProfileInformationModel = new Schema({
    //Will this need to be on a google or a twitch ID?
    userAccountName: {
        type: String
        //TODO: Change this reference when given the correct models for users
        //BE SURE THIS REFERENCE IS UNIQUE
        // ref: "user",
    },
    //This should only be a UID
    //IBlameLee, Naded, etc
    Halo5: {
        UID: {
            type: String,
            default: "",
        },
        isPopulated: {
            type: Boolean,
            default: false
        },
    },
    //This should be platform:
    //xbox, pc, ps4
    //UID:
    // Ninja, Chaelor, ZJones87
    Fortnite: {
        Platform: {
            type: String,
            default: "",
        },
        UID: {
            type: String,
            default: "",
        },
        isPopulated: {
            type: Boolean,
            default: false
        },
    },
    //This should be server(Platform):
    //br, eune, euw, lan, las, na, oce, ru, tr, jp, sea, kr, cn
    //UID foxifi, KZ+Cuzz, spaces get replaced with a + mark
    LOL: {
        Platform: {
            type: String,
            default: "",
        },
        UID: {
            type: String,
            default: "",
        },
        isPopulated: {
            type: Boolean,
            default: false
        },
    },
    //This should be Platform
    //xbl, psn, pc
    //UID: Kitcy(psn/xbl) NAMEHERE-XXXX(pc): Chaelor-1443
    Overwatch: {
        Platform: {
            type: String,
            default: "",
        },
        UID: {
            type: String,
            default: "",
        },
        isPopulated: {
            type: Boolean,
            default: false
        },
    },
    Date: {
        type: Date,
        default: Date.now
    },
    //This is the generic user information
    Bio: {
        type: String,
        default: "",
    },
    Twitter: {
        type: String,
        default: "",
    },
    Twitch: {
        type: String,
        default: "",
    },
    // TwitchEmbed: {
    //     Link: {
    //         type: String,
    //         default: "",
    //     },
    //     isPopulated: {
    //         type: Boolean,
    //         default: false
    //     }
    // },
    Instagram: {
        type: String,
        default: "",
    },
    ProfileImage: {
        type: String,
        default: "",
    },
});

var userProfileInformation = mongoose.model("userProfileInformation", userProfileInformationModel);

module.exports = userProfileInformation;
