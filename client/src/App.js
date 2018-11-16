//react components
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Spinner } from "@blueprintjs/core";

//local components
import Profile from "./pages/Profile";
import PublicProfile from "./pages/Profile/PublicProfile";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import { app } from "./Base";


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
    )} />
  }

  render() {
    if (this.state.loading === true) {
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
            {console.log(`App.js this.state.authenticated: ${this.state.authenticated}`)}
            <Route exact path="/" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/PublicProfile" component={PublicProfile} />
            <Route exact path="/profile/:id" component={Profile} />
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
