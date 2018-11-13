import React from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter, Router, Route, Switch  } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import App from './App';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import reducers from './reducers';

import authGuard from './components/HOCs/authGuard'

const jwtToken = localStorage.getItem('JWT_TOKEN');
// header for the backend to expect from axios
axios.defaults.headers.common['Authorization'] = jwtToken;

ReactDOM.render(
  <Provider store={createStore(reducers, {
    auth: {
      token: jwtToken,
      isAuthenticated: jwtToken ? true : false // checks local storage for authentication token
    }
  }, applyMiddleware(reduxThunk))}>
          <App />
  </Provider>,
  document.querySelector("#root")
);
