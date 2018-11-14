import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { compose } from 'redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { SubmitButton } from './Elements/index'

import * as actions from '../actions'
import CustomInput from "./CustomInput";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Logo from "../components/Logo";

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


class SignUp extends Component {
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

  render() {
    //access to this because of redux form
    const { handleSubmit } = this.props;
    return (
      <LoginWrapper>
        <GlobalStyle />
        <Logo />
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset>
                <Field
                  name="email"
                  type="text"
                  id="email"
                  label="Enter Your Email"
                  placeholder="example@example.com"
                  component={CustomInput}
                />
              </fieldset>
              <Field
                name="password"
                type="password"
                id="password"
                label="Enter your password"
                placeholder="password"
                component={CustomInput}
              />
              <fieldset />

              {this.props.errorMessage ?
                <div className="alert alert-danger">
                  {this.props.errorMessage}
                </div> : null}


              <SubmitButton type="submit" className="btn btn-primary">
                Sign Up
            </SubmitButton>
            </form>
          </div>

              {/* <FacebookLogin
                appId="246458786048562"
                // autoLoad={true}
                textButon="Facebook"
                fields="name, email, picture"
                callback={this.responseFacebook}
                cssClass="btn btn-outline-primary"
              /> */}
              <GoogleButton
                clientId="308330016501-kra9rvrv1fpacchgcdnabpdrk0gvv7ps.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                className="btn btn-outline-danger">Login with Google</GoogleButton>
        </div>
      </LoginWrapper>
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
  reduxForm({ form: "signup" })
)(SignUp);
