import Rebase from 're-base';
import firebase from 'firebase';
var CONFIG = require('./config');
// if (CONFIG.NODE_ENV !== 'production') require('dotenv').config()

const config = {
  apiKey: CONFIG.REACT_APP_Firebase_apiKey,
  authDomain: CONFIG.REACT_APP_Firebase_authDomain,
  databaseURL: CONFIG.REACT_APP_Firebase_databaseURL,
  projectId: CONFIG.REACT_APP_Firebase_projectId,
  storageBucket: CONFIG.REACT_APP_Firebase_storageBucket,
  messagingSenderId: CONFIG.REACT_APP_Firebase_messagingSenderId,
}

const app = firebase.initializeApp(config);
// const base = Rebase.createClass(app.database());
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { app, facebookProvider }