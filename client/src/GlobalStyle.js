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
    background: linear-gradient( rgba(0, 0, 0, .95), rgba(0, 0, 0, 0.9) ), url(/images/background/tiny-squares.png);
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

  .dropbtn {
    background-color: #00cac1;
    color: rgba(0,0,0,.72);
    padding: 16px;
    font-size: 16px;
    border: none;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #186f6b;}
  `

export default GlobalStyle;