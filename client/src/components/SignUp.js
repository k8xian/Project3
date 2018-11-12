import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { compose } from 'redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import * as actions from '../actions'
import CustomInput from "./CustomInput";

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

            { this.props.errorMessage ? 
            <div className="alert alert-danger">
              { this.props.errorMessage }
            </div> : null }


            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
        <div className="col">
          <div className="text-center">
            <div className="alert alert-primary">
              or sign up using third party services
            </div>
          
            <FacebookLogin 
              appId="246458786048562"
              // autoLoad={true}
              textButon="Facebook"
              fields="name, email, picture"
              callback={this.responseFacebook}
              cssClass="btn btn-outline-primary"
            />
            <GoogleLogin 
              clientId="308330016501-kra9rvrv1fpacchgcdnabpdrk0gvv7ps.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              className="btn btn-outline-danger"
            />

          </div>
        </div>
      </div>
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
