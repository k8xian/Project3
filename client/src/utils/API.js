import axios from "axios";

export default {
    //After a user is authorized, hit this route with their
    //userAccountName
    //That wil create an account for them automatically.
    createUserAccount: function (userData) {
        return axios.post(`/createUserAccount`, userData);
    },
    //This will fetch the profile information from the route above
    getProfileInformation: function (userData) {
      console.log("This is inside the api file");
        // I can not see if this works out right now, this
        //will probably have to be gotten from req.params
        return axios.get(`/getProfileInfo/` + userData.userAccountName )
    },
    getFortniteData: function (userData) {
        // I can not see if this works out right now, this
        //will probably have to be gotten from req.params
        return axios.get(`/api/getFortniteData/` + userData.userAccountName )
    },
    getHalo5Data: function (userData) {
        // I can not see if this works out right now, this
        //will probably have to be gotten from req.params
        return axios.get(`/api/getHalo5Data/` + userData.userAccountName )
    },
    getLOLData: function (userData) {
        // I can not see if this works out right now, this
        //will probably have to be gotten from req.params
        return axios.get(`/api/getLOLData/` + userData.userAccountName )
    },
    getOverwatchData: function (userData) {
        // I can not see if this works out right now, this
        //will probably have to be gotten from req.params
        return axios.get(`/api/getOverwatchData/` + userData.userAccountName )
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
    updateFortniteUID: function (userData) {
        console.log(userData);
        return axios.put(`/api/updateForniteUID/` + userData.userAccountName, userData);
    },
    updateHalo5UID: function (userData) {
        console.log(userData);
        return axios.put(`/api/updateHalo5UID/` + userData.userAccountName, userData);
    },
    updateLOLUID: function (userData) {
        console.log(userData);
        return axios.put(`/api/updateLOLUID/` + userData.userAccountName, userData);
    },
    updateOverwatchUID: function (userData) {
        console.log(userData);
        return axios.put(`/api/updateOverwatchUID/` + userData.userAccountName, userData);
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
    updateFortnitePlatform: function (userData) {
        console.log("Update fortnite platform")
        console.log(userData);
        return axios.put(`/api/updateFortnitePlatform/` + userData.userAccountName, userData);
    },
    updateLOLPlatform: function (userData) {
        console.log(userData);
        return axios.put(`/api/updateLOLPlatform/` + userData.userAccountName, userData);
    },
    updateOverwatchPlatform: function (userData) {
        console.log(userData);
        return axios.put(`/api/updateOverwatchPlatform/` + userData.userAccountName, userData);
    },
    /******************************************
    This section is for updating a user's generic profile information
    What this should look like on the front end:
    API.updateWHATEVERNAMETOUPDATE({
        Make a relevent object:
        Bio: relevent state here
        Instagram: relevent state here
        ProfileImage: relevent state here
        Twitch: relevent state here
        Twitter: relevent state here
    })
    .then(res => {
        if(res.status === 200){
            return res.json();
        }
    }).then(doSomething => if the status message was okay, this will fire, 
        tell the user data was successfully submitted)
    ******************************************/
    updateBio: function (userData) {
        console.log(userData);
        return axios.put(`/api/updateBio/` + userData.userAccountName, userData);
    },
    updateInstagram: function (userData) {
        console.log(userData);
        return axios.put(`api/updateInstagram/` + userData.userAccountName, userData);
    },
    updateProfileImage: function (userData) {
        console.log(userData);
        return axios.put(`api/updateProfileImage/` + userData.userAccountName, userData);
    },
    updateTwitch: function (userData) {
        console.log(userData);
        return axios.put(`/api/updateTwitch/` + userData.userAccountName, userData);
    },
    updateTwitter: function (userData) {
        console.log(userData);
        return axios.put(`api/updateTwitter/` + userData.userAccountName, userData);
    },
    /******************************************
    This section is for getting user's data via scrapping
    What this should look like on the front end:
    These are posting data, but they are really getting data!
     
    TODO: Make it so that these scrape data, then adds it to a data base
    That way we can show old data on initial load then maybe have a button
    That users may click that updates the data. 
    This button would be public that anyone can click 
    It would compare the dates in the data base and if it is over an hour old
    We would allow the button to be clickable and get new data

    I made this a TODO because it seems like a lot.

    API.getNewGAMENAMEHEREData({
        UID: this.state.GAMENAMEHEREuid or however we declare a user's game id
        Platform: WHATEVER STATE WE USE TO CAPTURE PLATFORM INPUT(e.g: this.state.GAMNAMEHEREPlatform)
    })
    .then(res => {
        if(res.status === 200){
            return res.json();
        }
    }).then(doSomething => if the status message was okay, this will fire, 
        tell the user data was successfully submitted)
    ******************************************/
    getNewFortniteData: function (userData) {
        return axios.post(`/api/getNewFortniteData`, userData);
    },
    getNewHalo5Data: function (userData) {
        return axios.post(`/api/getNewHalo5Data`, userData);
    },
    getNewLOLData: function (userData) {
        return axios.post(`/api/getNewLOLData`, userData);
    },
    getNewOverwatchData: function (userData) {
        return axios.post(`/api/getNewOverwatchData`, userData);
    },
    /******************************************
    This section is for updating and scraping data for the user
    When they first submit their credentials, we may need to modify them
    League of legends makes it so that spaces are + in the url
    By default blizzard wants usernames on PC to be Chalor-1443 instead of #1443
    Be sure you set "isPopulate: true", this will cause our get routes
    To know that they should retrieve data for that object

    NOTE: HALO 5 DOES NOT NEED PLATFORM 

    What this should look like on the front end:
    API.updateWHATEVERNAMETOUPDATE({
        isPopulated: True
        Platform: this.state.relevant platform
        UID: this.state.relevant UID
    })
    .then(res => {
        if(res.status === 200){
            return res.json();
        }
    }).then(doSomething => if the status message was okay, this will fire, 
        tell the user data was successfully submitted)
    ******************************************/
    updateAndScrapeFortnite: function (userData) {
        return axios.post(`/api/updateAndScrapeFortnite`, userData);
    },
    updateAndScrapeHalo5: function (userData) {
        return axios.post(`/api/updateAndScrapeHalo5`, userData);
    },
    updateAndScrapeLOL: function (userData) {
        return axios.post(`/api/updateAndScrapeLOL`, userData);
    },
    updateAndScrapeOverwatch: function (userData) {
        return axios.post(`/api/updateAndScrapeOverwatch`, userData);
    },
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
