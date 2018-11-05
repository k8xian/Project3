
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
import Logo from '../components/Logo'

const TwitchButton = styled.button`
  background-color: #6441A4;
  color: white;
  border: 0;
  width: 240px;
  height: 34px;
  clear: both;
  cursor: pointer;
`
const GoogleButton = styled.button`
background-color: white;
color: rgba(0,0,0,.54);
border: 0;
width: 240px;
height: 34px;
border-radius: 0;
cursor: pointer;
margin: 20px auto;
`

const LoginWrapper = styled.div`
width 80%;
max-width: 300px;
margin: 80px auto 0;
text-align: center;
`

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
`


const Index = () => (
  <LoginWrapper>
    <GlobalStyle />
    <Logo />
    <Link href="/auth/google" replace>
    <GoogleButton>Login with Google</GoogleButton>
    </Link>
    <Link href="/profile" replace>
      <TwitchButton>Login with Twitch.tv</TwitchButton>
    </Link>
    <Link href="/test-area" replace> 
        <TwitchButton>Testing Grounds</TwitchButton>
    </Link>
  </LoginWrapper>
)

export default Index