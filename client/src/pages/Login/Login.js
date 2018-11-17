import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyle from "../../GlobalStyle";
import Logo from "../../components/Logo";
import { Redirect } from "react-router-dom";
import { Toaster, Intent } from '@blueprintjs/core';
import { app } from "../../Base";
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

const StyledNote = styled.div`
font-size: .7rem;
font-style: italic;
font-weight: 300;
`

const StyledSubmit = styled.input`
width: 100%;
height: 30px;
border: 1px solid  #00fff4;
margin: 20px auto;
color:  #00fff4;
cursor: pointer;
`

const StyledInput = styled.input`
width: 100%;
margin: 10px 0 20px;
border: 0;
background-color: rgba(0,0,0,.54);
line-height: 20px;
height: 30px;
`

const StyledLabel = styled.label`
margin-top: 20px;
display: block;
`

const Demo = styled.a`
bottom: 20px;
left: 50px;
text-decoration: none;
color: white;
background-color: #673AB7;
position: absolute;
padding: 10px 20px;
border-radius: 5px;
box-shadow: 0 0 5px rgba(0,0,0,1);
cursor: pointer;

a:hover {
background-color: #4f2d8c; 
}
`
class Login extends Component {
  constructor(props) {
    super(props);
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
        <Demo href="https://project3-k8xian.herokuapp.com/profile/Chaelor">Click Here for Demo Completed Profile</Demo>

        <Logo />
<<<<<<< Updated upstream
        {/*console.log(`Login.js this.state.authenticated: ${this.state.authenticated}`)*/}
=======
>>>>>>> Stashed changes
        {/* Put submit handler in this form tag here */}
        <form onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }}>
          <StyledLabel>
            Email
      <StyledInput className="" type="email" name="email" ref={(input) => { this.emailInput = input }} />
          </StyledLabel>
          <StyledLabel>
            Password
      <StyledInput className=""type="password" name="password" ref={(input) => { this.passwordInput = input }} />
          </StyledLabel>
          <StyledLabel>
            Desired username
      <StyledInput className="" type="text"  name="username" ref={(input) => { this.usernameInput = input }}  />
          </StyledLabel>
          <StyledSubmit type="submit" className="" value="Sign Up / Sign in" />
        </form>
      </LoginWrapper>
    );
  }
}

export default Login;