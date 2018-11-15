import React from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import PublicProfile from "./pages/Profile/PublicProfile";
import Login from "./pages/Login";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import reducers from './reducers';

import authGuard from './components/HOCs/authGuard'


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/old-home" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/PublicProfile" component={PublicProfile} />
        <Route exact path="/profile/:id" component={Profile} />
        {/* This will be the individual view for any profile with an edit button that will show/hide forms */}
        <Route exact path="/profile/:id/edit" component={Profile} />
        <Route exact path="/dashboard" component={authGuard(Dashboard)} />
      </Switch>
    </div>
  </Router>
);

export default App;
