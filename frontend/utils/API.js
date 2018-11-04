import axios from "axios";

export default {

    getOverwatch: function(params) {
        return axios.get("/api/overwatch", params);
    },
    getFornite: function(params) {
        return axios.get("/api/fortnite", params);
    },
    getHalo5: function(params) {
        return axios.get("/api/halo5", params);
    },
    getLOL: function(params) {
        return axios.get("/api/lol/", params);
    }

};