import Rebase from 're-base';
import firebase from 'firebase';
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const config = {
  apiKey: process.env.REACT_APP_Firebase_apiKey,
  authDomain: process.env.REACT_APP_Firebase_authDomain,
  databaseURL: process.env.REACT_APP_Firebase_databaseURL,
  projectId: process.env.REACT_APP_Firebase_projectId,
  storageBucket: process.env.REACT_APP_Firebase_storageBucket,
  messagingSenderId: process.env.REACT_APP_Firebase_messagingSenderId,
}

const app = firebase.initializeApp(config);
// const base = Rebase.createClass(app.database());
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { app, facebookProvider }