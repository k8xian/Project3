import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyle from "../../GlobalStyle";
import Logo from "../../components/Logo";
import { Link, Redirect } from "react-router-dom";
import { Toaster, Intent } from '@blueprintjs/core';
import { app, facebookProvider } from "../../Base";
import API from "../../utils/API";

const TwitchButton = styled.button`
  background-color: #6441a4;
  color: white;
  border: 0;
  width: 240px;
  height: 34px;
  clear: both;
  cursor: pointer;
`;
const GoogleButton = styled.button`
  background-color: white;
  color: rgba(0, 0, 0, 0.54);
  border: 0;
  width: 240px;
  height: 34px;
  border-radius: 0;
  cursor: pointer;
  margin: 20px auto;
`;

const LoginWrapper = styled.div`
width 80%;
max-width: 300px;
margin: 80px auto 0;
text-align: center;
`;


class Login extends Component {
  constructor(props) {
    super(props);
    // this.authWithFacebook = this.authWithFacebook.bind(this);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
    this.state = {
      Redirect: false,
    }
  }

  //Auth with facebook. Kinda useless, fuck this
  // authWithFacebook() {
  //   app.auth().signInWithPopup(facebookProvider)
  //     .then((res, err) => {
  //       if (err) {
  //         this.Toaster.show({ intent: Intent.DANGER, message: "Unable to sign in with Facebook" })
  //       } else {
  //         this.setState({ Redirect: true })
  //       }
  //     })
  // }

  authWithEmailPassword(event) {
    event.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const userName = this.usernameInput.value;

    app.auth().fetchProvidersForEmail(email)
      .then((providers) => {
        //create user
        if (providers.length === 0) {
          return app.auth().createUserWithEmailAndPassword(email, password)
        } else if (providers.indexOf("password") === -1) {
          //Signed in using facebook.
          this.loginForm.reset();
          this.Toaster.show({ intent: Intent.WARNING, message: "Did you try signing up using an alternative?" });
        } else {
          //Sign in
          return app.auth().signInWithEmailAndPassword(email, password);
        }
      })
      .then((user) => {
        if (user && user.user.email) {
          this.loginForm.reset();
          this.setState({
            Redirect: true,
            RedirectRoute: `/profile/${userName}/edit`
          });
        }
      })
      .then(makeAccount => {
        if (email && userName) {
          API.createUserAccount({
            userAccountName: userName
          })
        }
      })
      .catch(err => this.Toaster.show({ intent: Intent.DANGER, message: err.message }))
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true
        })
      } else {
        this.setState({
          authenticated: false
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  render() {
    if (this.state.Redirect === true) {
      return <Redirect to={this.state.RedirectRoute} />
    }

    return (

      <LoginWrapper>

        <Toaster ref={(element) => { this.Toaster = element }} />
        <GlobalStyle />

        <Logo />
        {console.log(`Login.js this.state.authenticated: ${this.state.authenticated}`)}
        {/* Put submit handler in this form tag here */}
        <form onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }}>

          <div style={{ marginBottom: "10px" }} className="">
            <h5>Note</h5>
            If you do not have an account already, this form will create one!
      </div>
          <label>
            Email
      <input style={{ width: "100%" }} className="" name="email" type="email" ref={(input) => { this.emailInput = input }} placeholder="Email" />
          </label>
          <label>
            Password
      <input style={{ width: "100%" }} className="" name="password" type="password" ref={(input) => { this.passwordInput = input }} placeholder="Password" />
          </label>
          <label>
            Desired username
      <input style={{ width: "100%" }} className="" name="username" type="text" ref={(input) => { this.usernameInput = input }} placeholder="Desired Username" />
          </label>
          <input style={{ width: "25%" }} type="submit" className="" value="Log In" />
          {/* <button style={{ width: "100%", }} className="login-button"
            onClick={() => this.authWithFacebook()}>Login with Facebook </button> */}
        </form>
        {/* <a href="/login">
          <GoogleButton>Login</GoogleButton>
        </a>
        <a href="/profile">
          <TwitchButton>Login with Twitch.tv</TwitchButton>
        </a> */}
      </LoginWrapper>
    );
  }
}

export default Login;