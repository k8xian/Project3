// // Require model and initiate client with api key
// const pubg = require('pubg.js');
// const client = new pubg.Client('yourKey', 'region');

// // Get a single player using their name
// const player = client.getPlayer({ name: 'yeye155' })
//     .then(player => /* Use an extensive class of data */);
//     .catch(error => /* Catch any errors */);

// // Retrieve thousands of recent matches, and get stats for any of them
// const player = client.getSamples()
//     .then(matches => /* Have access to the PUBG's extensive list of matches */)
//     .catch(error => /* Catch any errors */)

// // Fetch a match with a heap of data on every participant of the match and their stats
// const player = client.getSamples()
//     .then(match => {
//         // Manipulate the data in any way you like, or even get match telemetry data 
//         match.fetchTelemetry()
//         // View a heap of data on the teams - best k/d, winning team etc
//         match.relationships.rosters

//     })
//     .catch(error => /* Catch any errors */)