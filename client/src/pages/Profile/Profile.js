import React, { Component } from "react";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { Bio, Game, PostBlock, Photo, SocialLink } from '../../components/Profile/Detail/index'
import { AllStats, FortniteStats, OverwatchStats, LOLStats, HaloStats } from '../../components/Stats/index'
import { SocialForm, TwitchStreamForm, TwitterFeedForm } from '../../components/Profile/Forms/index'
import { ProfileHeader, StatsWrapper, MainContent, GamesList, SidebarEmbed, LinksWrapper, PostWrapper, ProfileContent, MainDetail } from '../../components/Profile/Styles/index'
import API from "../../utils/API";

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

  .element::-webkit-scrollbar { 
    width: 0 !important 
  }
`

const StatButtonSwitch = styled.button`
background-color: rgba(0,0,0,0);
border: 0;
color: white;
cursor: pointer;
`

const AllStatButton = styled.button`
background-color: rgba(0,0,0,0);
color: #00fff4;
cursor: pointer;
border: 1px solid #00fff4;
`

//prop for edit view or not edit view

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allStatsHidden: false,
      haloStatsHidden: true,
      lolStatsHidden: true,
      fortniteStatsHidden: true,
      overwatchStatsHidden: true,
    };

    this.showAllStats = this.showAllStats.bind(this);
    this.showHaloStats = this.showHaloStats.bind(this);
    this.showLOLStats = this.showLOLStats.bind(this);
    this.showFortniteStats = this.showFortniteStats.bind(this);
    this.showOverwatchStats = this.showOverwatchStats.bind(this);
  }

  showAllStats(event) {
    event.preventDefault();
    this.setState({
      allStatsHidden: false,
      haloStatsHidden: true,
      lolStatsHidden: true,
      fortniteStatsHidden: true,
      overwatchStatsHidden: true

    })
  }

  showHaloStats(event) {
    event.preventDefault();
    this.setState({
      allStatsHidden: true,
      haloStatsHidden: false,
      lolStatsHidden: true,
      fortniteStatsHidden: true,
      overwatchStatsHidden: true

    })
  }

  showLOLStats(event) {
    event.preventDefault();
    this.setState({
      allStatsHidden: true,
      haloStatsHidden: true,
      lolStatsHidden: false,
      fortniteStatsHidden: true,
      overwatchStatsHidden: true

    })
  }

  showFortniteStats(event) {
    event.preventDefault();
    this.setState({
      allStatsHidden: true,
      haloStatsHidden: true,
      lolStatsHidden: true,
      fortniteStatsHidden: false,
      overwatchStatsHidden: true

    })
  }

  showOverwatchStats(event) {
    event.preventDefault();
    this.setState({
      allStatsHidden: true,
      haloStatsHidden: true,
      lolStatsHidden: true,
      fortniteStatsHidden: true,
      overwatchStatsHidden: false,
    })
  }

  componentDidMount() {

  }

  componentWillMount() {
    let url = new URL(document.URL);
    const parseURL = url.pathname.split("/");

    let userAccountName = parseURL[2];
    console.log(userAccountName);
    API.getProfileInformation({ 
      userAccountName: userAccountName
    })
      .then(res => {
        console.log(res);
        this.setState({
          userAccountName: userAccountName,
          Bio: res.Bio,
          Twitter: res.Twitter,
          Twitch: res.Twitch,
          Instagram: res.Instagram,
          ProfileImage: res.ProfileImage,
          //Are these necessary here?
          //These will tell you if a game has an entry
          //in the data base, if they do, we should just
          //use these to display which games the person has info entered for
          isFortnitePopulated: res.Fortnite.isPopulated,
          isHalo5Populated: res.Halo5.isPopulated,
          isLOLPopulated: res.LOL.isPopulated,
          isOverwatchPopulated: res.Overwatch.isPopulated,
          //These should contain the UID, Platform, and isPopulated
          //They will be used when the url is in edit mode ie: /profile/:id/edit
          Fortnite: res.Fortnite,
          Halo5: res.Halo5,
          LOL: res.LOL,
          Overwatch: res.Overwatch,
        });
      });
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <ProfileHeader>
          <Photo />
          <ProfileContent>
            <Bio />
          </ProfileContent>
          <LinksWrapper>
            <SocialForm />
          </LinksWrapper>
        </ProfileHeader>
        <MainContent>
          <GamesList>
            {/* Put a refresh button for each game in the stats */}
            <AllStatButton onClick={this.showAllStats}>Show All Stats</AllStatButton>
            <StatButtonSwitch onClick={this.showHaloStats}> <Game image="/images/games/halo.png" title="Halo 5" /></StatButtonSwitch>
            <StatButtonSwitch onClick={this.showOverwatchStats}> <Game image="/images/games/overwatch.png" title="Overwatch" /></StatButtonSwitch>
            <StatButtonSwitch onClick={this.showFortniteStats}><Game image="/images/games/fortnite.png" title="Fortnite" /></StatButtonSwitch>
            <StatButtonSwitch onClick={this.showLOLStats}><Game image="/images/games/leagueof.png" title="League of Legends" /></StatButtonSwitch>
          </GamesList>
          <MainDetail>
            <StatsWrapper>
              {!this.state.allStatsHidden && <AllStats />}
              {!this.state.lolStatsHidden && <LOLStats />}
              {!this.state.fortniteStatsHidden && <FortniteStats />}
              {!this.state.overwatchStatsHidden && <OverwatchStats />}
              {!this.state.haloStatsHidden && <HaloStats />}
            </StatsWrapper>
            <PostWrapper>
              <PostBlock />
              <PostBlock />
              <PostBlock />
            </PostWrapper>
          </MainDetail>
          <SidebarEmbed>
            <TwitchStreamForm />
            <TwitterFeedForm />
          </SidebarEmbed>
        </MainContent>
      </div>
    )
  }
}


export default Profile