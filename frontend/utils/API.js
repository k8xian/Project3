import axios from "axios";

export default {
    //Send the data to the api
    getOverwatch: function(params) {
        return axios.get("/api/overwatch", params);
    },
    getFornite: function(params) {
        return axios.get("/api/fortnite", params);
    },
    getHalo5: function(params) {
        //Is it working? Also what is in the params.
        //In halo's case, only the UID should be included in the params.
        console.log("Working");
        console.log(params);
        return axios.get("/api/halo5", params);
    },
    getLOL: function(params) {
        return axios.get("/api/lol/", params);
    }

};