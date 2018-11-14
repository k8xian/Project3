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

  async componentDidMount() {

    //This code is used for parsing the url.
    //First line gets the url,
    //Second line WILL NEED TO BE CHANGED ON LIVE. It splits the url where / marks are
    //Third line grabs the name from the url 
    let url = new URL(document.URL);
    const parseURL = url.pathname.split("/");
    let userAccountName = parseURL[2];

    //This will await the data that is retrieved through the call to the backend
    //And then it will save it to the profileInformation variable
    //Then set state to the retrieved information, while preserving what was there
    const getProfileInformation = await API.getProfileInformation({ userAccountName: userAccountName });
    let profileInformation = getProfileInformation.data;
    this.setState({ profileInformation });

    let SocialMediaInfo = {
      Bio: this.state.profileInformation.Bio,
      Instagram: this.state.profileInformation.Instagram,
      Twitch: this.state.profileInformation.Twitch,
      Twitter: this.state.profileInformation.Twitter,
    };

    let fortniteStats;
    let fortniteData;
    let halo5Stats;
    let halo5Data;
    let lolStats;
    let lolData;
    let overwatchStats;
    let overwatchData;

    if (this.state.profileInformation.Fortnite.isPopulated) {
      fortniteStats = await API.getFortniteData({ userAccountName: userAccountName });
      fortniteData = fortniteStats.data;
      this.setState({ fortniteData });
    }

    if (this.state.profileInformation.Halo5.isPopulated) {
      halo5Stats = await API.getHalo5Data({ userAccountName: userAccountName });
      halo5Data = halo5Stats.data;
      this.setState({ halo5Data });
    }

    if (this.state.profileInformation.LOL.isPopulated) {
      lolStats = await API.getLOLData({ userAccountName: userAccountName });
      lolData = lolStats.data;
      this.setState({ lolData });
    }

    if (this.state.profileInformation.Overwatch.isPopulated) {
      overwatchStats = await API.getOverwatchData({ userAccountName: userAccountName });
      overwatchData = overwatchStats.data;
      this.setState({ overwatchData });
    }
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
              {!this.state.lolStatsHidden && <LOLStats lolData={this.state.lolData} handleClick={API.getNewLOLData}/>}
              {!this.state.fortniteStatsHidden && <FortniteStats fortniteData ={this.state.fortniteData}/>}
              {!this.state.overwatchStatsHidden && <OverwatchStats overwatchData={this.state.overwatchData}/>}
              {!this.state.haloStatsHidden && <HaloStats halo5Data={this.state.halo5Data}/>}
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