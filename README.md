# PROPLAYER

**Collaborators:** 
[Kate Christian](https://github.com/k8xian) - 
[Joshua Joseph](https://github.com/Chaelor) -
[John Cirone](https://github.com/Ciwonie) - 
[Eric Eissler](https://github.com/eeissler83) 

**Deployment Link:** https://project3-k8xian.herokuapp.com/

**For Northwestern University's Full Stack Flex Coding Bootcamp**

* This web-app is a social media tool for gamers

## Install

use npm install in client folder
use yarn install in root, use yarn start to run


## Interface / Development
* [Initial screen](https://project3-k8xian.herokuapp.com/) Allows users to login with an existing or new account
    * [Profile Page - Demo](https://project3-k8xian.herokuapp.com/profile/Chaelor)
        * A demo page to show off web-apps functionality
* On the the profile screen, users can pull realtime data from their favorite games to keep track gameplay statistics 
* Users can populate data from Halo 5, Overwatch, Fortnite, and League of Legends
* Players have the option to control their profile page for other viewers, such as a bio, profile picture, and status updates
* Players can share their stats with others to compare their latest ingame achievements

## Frontend

### Styled-Components
* [Styled components](https://www.styled-components.com/) lets you use ES6 and css to generate dynamically styled components

### Stats
* All Stats will be compiled in "allstats", there are props listed in the comments
* Ultimately the db needs to be set up to map to all of these. 

### Helper Function added
joi: allows you to create blueprints or schemas for JavaScript objects (an object that stores information) to ensure validation of key information. https://github.com/hapijs/joi

### Google Spinner
This is a Material Design spinner components for React.js. (https://tsuyoshiwada.github.io/react-md-spinner/)

### Gravatar
[A library to generate Gravatar URLs in Node.js Based on gravatar specs](https://www.npmjs.com/package/gravatar) - Gravatar Documentation is [here](https://en.gravatar.com/)

## Challenges

### JSON Web Token (JWT)
JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
JWT.IO allows you to decode, verify and generate JWT. https://jwt.io/
Github - https://github.com/auth0/node-jsonwebtoken

### Google API + OAuth
Access the Google API here - https://console.developers.google.com/apis
Google OAuth Codes & Tokens - https://developers.google.com/oauthplayground/

### Game APIs
The video game APIs did not have detailed documentations and some APIs did not work as well as just scrapping with Axios

## Upcoming Features
* Graphing out user data
* Supporting more games
* More stats such as: shots fired, hits, misses, locations, etc.
* Embedding twitter and twitch feeds
* Posting updates
* Social connections / Social Feed
* Google and Twitch logins 
* Responsive design



