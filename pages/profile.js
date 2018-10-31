
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
import Photo from '../components/Profile/Photo'
import Info from '../components/Profile/Info'
import Links from '../components/Profile/Links'
import Embed from '../components/Profile/Embed'
import Game from '../components/Profile/Game'


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

const StyledHeader = styled.div`
width: 100%;
height: 200px;
box-shadow: 0 3px 0 rgba(0,0,0,.3);
display: block;
`

const MainBody = styled.div`
width: 100%;
`
const Stats = styled.div`
width: 75%;
height: calc(100vh - 200px);
background-color: limegreen;
`

const Detail = styled.div`
height: calc(100vh - 200px);
width: 75%;
float: left;
display: block;
`

const GamesWrapper = styled.div`
height: 160px;
width: 100%;
float: left;
display: block;
border-bottom: 1px solid rgba(0,0,0,.2);
display: flex;
justify-content: center;
flex-flow: row no-wrap;
overflow-x: scroll;
overflow-y: hidden;
`

const Profile = () => (
  <div>
    <GlobalStyle />
    <StyledHeader>
      <Photo/>
      <Info/>
      <Links/>
    </StyledHeader>
    <MainBody>
      <Detail>
        <GamesWrapper>
          <Game/>
          <Game/>
          <Game/>
          <Game/>
          <Game/>
          <Game/>
        </GamesWrapper>
      </Detail>
      <Embed/>
    </MainBody>
  </div>
)

export default Profile