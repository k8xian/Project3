import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { compose } from 'redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import * as actions from '../../actions'
import CustomInput from '../../components/CustomInput';

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
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
const TestButton = styled.button`
  background-color: cyan;
  color: white;
  border: 0;
  width: 240px;
  height: 34px;
  clear: both;
  cursor: pointer;
  margin: 20px auto;
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

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Libre+Franklin:300,800');
  body {
    margin: 0;
    padding: 0;
    color: white;
    height: 100vh;
    width: 100vw;
    font-family: 'Libre Franklin', sans-serif;
    background-repeat: no-repeat;
    background: #171717;
    background: -moz-linear-gradient(top, #171717 0%, #29282d 50%, #1c2529 100%);
    background: -webkit-linear-gradient(top, #171717 0%,#29282d 50%,#1c2529 100%); 
    background: linear-gradient(to bottom, #171717 0%,#29282d 50%,#1c2529 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#171717', endColorstr='#1c2529',GradientType=0 );
    overflow: hidden;
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  async onSubmit(formData) {
    console.log('onSubmit() got called');
    console.log('form data', formData);
    // We need to call some actioncreator
    await this.props.signUp(formData);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard') // sending user to dashboard when they signup
    }
  }

  async responseGoogle(res) {
    console.log('response Google', res);
    await this.props.oauthGoogle(res.accessToken);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard') // sending user to dashboard when they signup
    }
  }

  async responseFacebook(res) {
    console.log('response Facebook', res);
    await this.props.oauthFacebook(res.accessToken);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard') // sending user to dashboard when they signup
    }
  }

  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

  //   initial loading of these components
  //   componentDidMount() {
  //     API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({book: res.data}))
  //     .catch(err => console.log(err));
  //   }

  render() {
    const { handleSubmit } = this.props;
    return (
      <LoginWrapper>
        <GlobalStyle />
        <Logo />
        {/* Put submit handler in this form tag here */}
        <form >
          {/* Put on change handler for email here */}
          <input type="email"></input>
          {/* put on change handler for password here */}
          <input type="password"></input>
          <input type="submit"></input>

          {this.props.errorMessage ?
            <div className="alert alert-danger">
              {this.props.errorMessage}
            </div> : null}

          <button type="submit" className="btn btn-primary">
            Sign Up
            </button>
        </form>
        <GoogleButton
          clientId="308330016501-kra9rvrv1fpacchgcdnabpdrk0gvv7ps.apps.googleusercontent.com"
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          className="btn btn-outline-danger"
        />
        <a href="/profile">
          <TwitchButton>Login with Twitch.tv</TwitchButton>
        </a>
      </LoginWrapper >
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "login" })
)(Login);