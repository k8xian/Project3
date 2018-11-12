// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const Schema = mongoose.Schema;

// // Create a schema. can fill it with as much data as we need
// const userSchema = new Schema({

//     profile: {
//         bio: {
//             type: String,
//         },
//         twitch: {
//             type: String,
//         },
//         twitter: {
//             type: String,
//         },
//         instagram: {
//             type: String,
//         },
//     }
// });

// // mongoose prefunction
// userSchema.pre("save", async function (next) {
//     try {
//         if (this.method !== 'local') {
//             next(); // this if statement will avoid hashing if user chooses to sign with google/facebook
//         }
//         // generate a salt
//         const salt = await bcrypt.genSalt(10);
//         // Generate a password hash (salt + hash)
//         const passwordHash = await bcrypt.hash(this.local.password, salt);
//         // Re-assign hashed version over original, plain text password
//         this.local.password = passwordHash;
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// userSchema.methods.isValidPassword = async function (newPassword) {
//     try {
//         return await bcrypt.compare(newPassword, this.local.password); // Comparison between plain and hashed password
//     } catch (error) {
//         throw new Error(error);
//     }
// };

// // Create a model
// const User = mongoose.model("user", userSchema);

// // Export the model
// module.exports = userBio;