//react components
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import { Spinner } from "@blueprintjs/core";
import Profile from "./pages/Profile";
import PublicProfile from "./pages/Profile/PublicProfile";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import { app, base } from "./Base";
import MDSpinner from 'react-md-spinner';


class App extends Component {
  constructor() {
    super();
    this.currentUser = this.setCurrentUser.bind(this);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true,
    }
  }

  setCurrentUser(user) {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true,
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false,
      })
    }
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false,
        })
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false,
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  PrivateRoute = ({ component: Component, ...rest }) => {
    <Route {...rest} render={(props) => (
      this.state.authenticated === true
      ? <Component {...props} />
      : <Redirect to="/login" />
    )}/>
  }

  render() {

    if (this.state.loading === true) {
      return (
        <div>
          <h3 style={{ position: 'fixed', top: '25%', left: '50%'}}>Loading...</h3>
          <MDSpinner className="spinner" style={{ position: 'fixed', top: '33%', left: '47%' }} size={150} duration={500}/>
        </div>
      )
    }
    return (
      <Router>
        <div>
          <Switch>
            {console.log(`App.js this.state.authenticated: ${this.state.authenticated}`)}
            <Route exact path="/" component={Login} />
            <Route exact path="/logout" component={Logout} />
            {/* <Route exact path="/PublicProfile" component={PublicProfile} /> */}
            <Route exact path="/profile/:id" component={Profile} />{/* This will be public*/}
            <Route exact path="/profile" component={Profile} />{/* This will be public*/}
            <Route path='/profile/:id/edit' 
            render={(props) => <Profile {...props} edit={true} />}/>    
            <Route exact path="*" component={Login} />{/*This will be protected */}
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
