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
import styled from 'styled-components';

const StyledLoading = styled.div`
margin: 0;
padding: 0;
height: 100vh;
width: 100vw;
color: white;
margin-top: -8px;
margin-left: -8px;
font-family: 'Libre Franklin', sans-serif;
background: linear-gradient( rgba(11, 0, 33, 0.94),rgba(25, 0, 78, 0.94) ), url(/images/background/tiny-squares.png);
overflow: hidden;
`

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return rest.authenticated
      ? <Component {...props} />
      : <Redirect to="/" />
  }} />)


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

    if (this.state.loading === true) {
      return (
        <StyledLoading>
          <h3 style={{ position: 'fixed', top: '25%', left: 'calc(50% - 75px', width: '150px', textAlign: 'center',  fontFamily: "'Libre Franklin', sans-serif"}}>Loading...</h3>
          <MDSpinner className="spinner" style={{ position: 'fixed', top: '33%', left: 'calc(50% - 75px'}} size={150} duration={500}/>
        </StyledLoading>
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
            <Route exact path='/profile/:id/edit' render={(props) => <Profile {...props} edit={true} />} />
            {/* <PrivateRoute authenticated={this.state.authenticated} exact path="/profile/:id/edit" render={(props) => <Profile {...props} edit={true} />} /> */}

            {/* <Route path='/profile/:id/edit' 
            render={(props) => <Profile {...props} edit={true} />}/>    
            <Route exact path="*" component={Login} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
