import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    this.authWithFacebook = this.authWithFacebook.bind(this)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
  }

  authWithFacebook() {
    console.log("Facebook");
  }

  authWithEmailPassword(event){
    event.preventDefault()
    console.table([{
      email:this.emailInput.value,
      password:this.passwordInput.value,
    }]);
  }
  
  render() {
    return (
      <div>
        <button style={{ width: "20%", }} className="login-button"
          onClick={() => this.authWithFacebook()}>Login with Facebook </button>

        <hr style={{ margin: "10px 0" }} />

        <form onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }}>

          <div style={{ arginBottom: "10px" }} className="">

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
          <input style={{width: "25%"}} type="submit" className="" value="Log In" />
        </form>
      </div>
    )
  }
}

export default Login;