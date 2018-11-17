import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Logo from "../../components/Logo";
import { Link, Redirect } from "react-router-dom";
import { Toaster, Intent } from '@blueprintjs/core';
import { app, facebookProvider } from "../../Base";
import API from "../../utils/API";

class Login extends Component {
  constructor(props) {
    super(props);
    this.authWithFacebook = this.authWithFacebook.bind(this);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
    this.state = {
      Redirect: false,
    }
  }

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
        if (user && user.email) {
          this.loginForm.reset();
          this.setState({ redirect: true });
        }
      })
      .then(makeAccount => {
        API.createUserAccount({
          userAccountName: userName
        })
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
          authenticated: true
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  render() {
    if (this.state.Redirect === true) {
      return <Redirect to="/" />
    }

    return (

      <LoginWrapper>

        <Toaster ref={(element) => { this.Toaster = element }} />
        <GlobalStyle />

        <Logo />
        {/*console.log(this.state.authenticated)*/}
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
            Password
      <input style={{ width: "100%" }} className="" name="username" type="text" ref={(input) => { this.usernameInput = input }} placeholder="Password" />
          </label>
          <input style={{ width: "25%" }} type="submit" className="" value="Log In" />
          <button style={{ width: "100%", }} className="login-button"
            onClick={() => this.authWithFacebook()}>Login with Facebook </button>
        </form>
      </LoginWrapper>
    );
  }
}

export default Login;
