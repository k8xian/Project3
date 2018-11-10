import axios from "axios";

export default {
    createUserAccount: function(userData) {
        return axios.post(`/api/createUserAccount`, userData);
    },
    /******************************************
    This section is for updating a user's ID
    What this should look like on the front end:
    API.updateGAMENAMEUID({
        userAccountName: this.state.userAccountName,
        newUID: WHATEVER STATE WE USE TO CAPTURE UID INPUT (e.g: this.state.UID)
    })
    .then(res => {
        if(res.status === 200){
            return res.json();
        }
    }).then(doSomething => if the status message was okay, this will fire, 
        tell the user data was successfully submitted)
    ******************************************/
    updateFortniteUID: function(userData) {
        console.log(userData);
        return axios.put(`/api/updateForniteUID`, userData);
    },
    updateHalo5UID: function(userData) {
        console.log(userData);
        return axios.put(`/api/updateHalo5UID`, userData);
    },
    updateLOLUID: function(userData) {
        console.log(userData);
        return axios.put(`/api/updateLOLUID`, userData);
    },
    updateOverwatchUID: function(userData) {
        console.log(userData);
        return axios.put(`/api/updateOverwatchUID`, userData);
    },
    /******************************************
    This section is for updating a user's platform
    What this should look like on the front end:
    API.updateGAMENAMEPlatform({
        userAccountName: this.state.userAccountName,
        newPlatform: WHATEVER STATE WE USE TO CAPTURE PLATFORM INPUT(e.g: this.state.Platform)
    })
    .then(res => {
        if(res.status === 200){
            return res.json();
        }
    }).then(doSomething => if the status message was okay, this will fire, 
        tell the user data was successfully submitted)
    ******************************************/
    updateFortnitePlatform: function(userData) {
        console.log("Update fortnite platform")
        console.log(userData);
        return axios.put(`/api/updateFortnitePlatform`, userData);
    },
    updateLOLPlatform: function(userData) {
        console.log(userData);
        return axios.put(`/api/updateLOLPlatform`, userData);
    },
    updateOverwatchPlatform: function(userData) {
        console.log(userData);
        return axios.put(`/api/updateOverwatchPlatform`, userData);
    },
    saveBio: function(userData) {
        console.log(userData);
        return axios.put(`/api/updatebio`, userData);
    },
    addTwitch: function(userData) {
        console.log(userData);
        return axios.put(`/api/addtwitch`, userData);
    },
    addTwitter: function(userData) {
        console.log(userData);
        return axios.put(`api/addtwitter`, userData);
    },
    addInstagram: function(userData) {
        console.log(userData);
        return axios.put(`api/addinstagram`, userData);
    }
};


//THIS IS LEFTOVER LEGACY CODE
//LOOK AT THIS IF YOU NEED ADDITIONAL HELP
// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
