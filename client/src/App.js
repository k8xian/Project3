//react components
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Spinner} from "@blueprintjs/core";

//local components
import Profile from "./pages/Profile";
import PublicProfile from "./pages/Profile/PublicProfile";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import {app, base} from "./Base";


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
  render() {
    if(this.state.loading === true) {
      return (
        <div>
          <h3>Loading</h3>
          <Spinner />
        </div>
      )
    }
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/logout" component={Logout} />
            {/* <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} /> */}
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/PublicProfile" component={PublicProfile} />
            <Route exact path="/profile/:id" component={Profile} />
            {/* This will be the individual view for any profile with an edit button that will show/hide forms */}
            <Route exact path="/profile/:id/edit" component={Profile} />
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;

/* Notes:

path does a prefix matcj


*/
