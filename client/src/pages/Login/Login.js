import React, { Component } from "react";
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
  state = {
    // book: {}
  };
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
        </form>



        <a href="/auth/google">
          <GoogleButton>Login with Google</GoogleButton>
        </a>
        <a href="/profile">
          <TwitchButton>Login with Twitch.tv</TwitchButton>
        </a>
      </LoginWrapper>
    );
  }
}

export default Login;
