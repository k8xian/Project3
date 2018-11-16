import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inconsolata', monospace;
    margin: -20px 0 0;
    padding: 0;
    color: white;
    background-image: URL('/images/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

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

  input:-webkit-autofill {
    background-color: rgba(0,0,0,0) !important;
    border: 0;
    text-align: center;
    color: white;
  }

  input {
    background-color: rgba(0,0,0,0);
    border: 0;
    font-size: 1rem;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid white;
    color: white;
    margin-bottom: 20px;
  }

  nav ul {
    list-style-type: none;
    float: right;
  }

  nav ul li {
    float: left;
    margin-right: 0.5em;
  }

  nav ul li a {
    padding: 0.25em 1em;
    text-decoration: none; /* no underline */
    background-color: #EBF5FF; /* pale bluish white */
    color: #4312AE; /* dark blue */
    border: 2px solid black;
    border-top-left-radius: 1em 1em; /* rounded corner! */
    border-top-right-radius: 1em 1em; /* another rounded corner! */
  }

  nav ul li a:hover, nav ul li a:focus {
    color: black;
    background-color: white;
    font-weight: bold;
  }

  h1 {
    max-width: 400px;
    width: 400px;
    float: left;
    text-align: left;
    padding: 0;
    margin: 0 40px;
    line-height: 40px;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  `

export default GlobalStyle;