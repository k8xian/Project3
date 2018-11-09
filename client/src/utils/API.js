import axios from "axios";

export default {
    //To use this,
    //In the files, import "utils, and pack data into an object."
    // handleUpdate = () => {
    //     API.updateHalo5({
    //         sessionID: this should be the person's session ID
    //          platform: see models from users-games-models for acceptable platforms for each game
    //          UID: This should be the user's user id for the game they play. PC overwatch should be noted as UID-12345
    //     })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }

    //This might have to change in some form. saveData should just be run when we create a user account
    createUserAccount: function(userData) {
        return axios.post(`/api/userAccounts`, userData);
    },
    updateFortnite: function(userData) {
        console.log(userData);
        return axios.put(`/api/updateFortnite`, userData);
    },
    updateHalo5: function(userData) {
        console.log(userData);
        return axios.put(`/api/updateHalo5`, userData);
    },
    updateLOL: function(userData) {
        console.log(userData);
        return axios.put(`/api/updateLOL`, userData);
    },
    updateOverwatch: function(userData) {
        console.log(userData);
        return axios.put(`/api/updateOverwatch`, userData);
    },
};

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
