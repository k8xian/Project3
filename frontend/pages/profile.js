
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
import { Bio, Game, PostBlock, Photo, SocialLink } from '../components/Profile/Detail/index'
import { ProfileHeader, StatsWrapper, MainContent, GamesList, SidebarEmbed, LinksWrapper, PostWrapper, ProfileContent, MainDetail } from '../components/Profile/Styles/index'


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



const Profile = () => (
  <div>
    <GlobalStyle />
    <ProfileHeader>
      <Photo />
      <ProfileContent>
        <Bio />
      </ProfileContent>
      <LinksWrapper>
        <SocialLink />
        <SocialLink />
        <SocialLink />
        <SocialLink />
      </LinksWrapper>
    </ProfileHeader>
    <MainContent>
      <GamesList>
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
      </GamesList>
      <MainDetail>
        <StatsWrapper />
        <PostWrapper>
          <PostBlock />
          <PostBlock />
          <PostBlock />
        </PostWrapper>
      </MainDetail>
      <SidebarEmbed />
    </MainContent>
  </div>
)

export default Profile