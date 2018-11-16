import React, { Component } from "react";
import styled from 'styled-components';
import GlobalStyle from '../../GlobalStyle';
import {Header} from '../../components/Elements/index';
import { Bio, Game, PostBlock, Photo, SocialLink } from '../../components/Profile/Detail/index'
import { AllStats, FortniteStats, OverwatchStats, LOLStats, HaloStats } from '../../components/Stats/index'
import { SocialForm, TwitchStreamForm, TwitterFeedForm, HaloForm, FortniteForm, OverwatchForm, LOLForm } from '../../components/Profile/Forms/index'
import { ProfileHeader, StatsWrapper, MainContent, GamesList, SidebarEmbed, LinksWrapper, PostWrapper, ProfileContent, MainDetail } from '../../components/Profile/Styles/index'
import API from "../../utils/API";

const StatButtonSwitch = styled.button`
background-color: rgba(0,0,0,0);
border: 0;
color: white;
cursor: pointer;
`

const AllStatButton = styled.button`
width: 100px;
background-color: rgba(0,0,0,0);
color: #00fff4;
cursor: pointer;
border: 1px solid #00fff4;
height: 18px;
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
      halodataexists: false,
      loldataexists: false,
      fortnitedataexists: false,
      overwatchdataexists: false
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
      this.setState({ fortniteData, fortnitedataexists: true });
    }

    if (this.state.profileInformation.Halo5.isPopulated) {
      halo5Stats = await API.getHalo5Data({ userAccountName: userAccountName });
      halo5Data = halo5Stats.data;
      this.setState({ halo5Data, halodataexists: true });
    }

    if (this.state.profileInformation.LOL.isPopulated) {
      lolStats = await API.getLOLData({ userAccountName: userAccountName });
      lolData = lolStats.data;
      this.setState({ lolData, loldataexists: true });
    }

    if (this.state.profileInformation.Overwatch.isPopulated) {
      overwatchStats = await API.getOverwatchData({ userAccountName: userAccountName });
      overwatchData = overwatchStats.data;
      this.setState({ overwatchData, overwatchdataexists: true });
    }
  }

  handleGetNewLOLData = () => {
    console.log(this.state.lolData);
    API.getNewLOLData({
      Platform: this.state.profileInformation.LOL.Platform,
      UID: this.state.profileInformation.LOL.UID,
      userAccountName: this.state.profileInformation.userAccountName
    }).then(res => {
      console.log(res.data);
      this.setState({ lolData: res.data })
    });
  }

  handleGetNewFortniteData = () => {
    API.getNewFortniteData({
      Platform: this.state.profileInformation.Fortnite.Platform,
      UID: this.state.profileInformation.Fortnite.UID,
      userAccountName: this.state.profileInformation.userAccountName
    }).then(res => {
      console.log(res.data);
      this.setState({ fortniteData: res.data })
    });
  }

  handleGetNewOverwatchData = () => {
    API.getNewOverwatchData({
      Platform: this.state.profileInformation.Overwatch.Platform,
      UID: this.state.profileInformation.Overwatch.UID,
      userAccountName: this.state.profileInformation.userAccountName
    }).then(res => {
      console.log(res.data);
      this.setState({ overwatchData: res.data })
    });
  }

  handleGetNewHalo5Data = () => {
    API.getNewHalo5Data({
      UID: this.state.profileInformation.Halo5.UID,
      userAccountName: this.state.profileInformation.userAccountName
    }).then(res => {
      console.log(res.data);
      this.setState({ halo5Data: res.data })
    });
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header id={this.props.match.params.id}/>
        <ProfileHeader>
          <Photo />
          <ProfileContent>
            <Bio />
          </ProfileContent>
          {/* Commenting this out until it looks prettier */}
          <LinksWrapper>
            <SocialForm />
          </LinksWrapper>
        </ProfileHeader>
        <MainContent>
          <MainDetail>
            <StatsWrapper>
              {!this.state.allStatsHidden && <AllStats />}
              {!this.state.lolStatsHidden &&
                <LOLStats
                  handleGetNewLOLData={this.handleGetNewLOLData}
                  lolData={this.state.lolData}
                />}
              {!this.state.fortniteStatsHidden &&
                <FortniteStats
                  handleGetNewFortniteData={this.handleGetNewFortniteData}
                  fortniteData={this.state.fortniteData}
                />}
              {!this.state.overwatchStatsHidden &&
                <OverwatchStats
                  handleGetNewOverwatchData={this.handleGetNewOverwatchData}
                  overwatchData={this.state.overwatchData}
                />}
              {!this.state.haloStatsHidden &&
                <HaloStats
                  handleGetNewHalo5Data={this.handleGetNewHalo5Data}
                  halo5Data={this.state.halo5Data}
                />}
            </StatsWrapper>
            <PostWrapper>
              <PostBlock />
              <PostBlock />
              <PostBlock />
            </PostWrapper>
          </MainDetail>
          <SidebarEmbed>
          <GamesList>
            {/* Put a refresh button for each game in the stats */}
            <AllStatButton onClick={this.showAllStats}>Show All Stats</AllStatButton>
            {!this.halodataexists && <HaloForm />}
            {this.halodataexists && <StatButtonSwitch onClick={this.showHaloStats}> <Game image="/images/games/halo.png" title="Halo 5" /></StatButtonSwitch>}
            {!this.overwatchdataexists && <OverwatchForm />}
            {this.overwatchdataexists && <StatButtonSwitch onClick={this.showOverwatchStats}> <Game image="/images/games/overwatch.png" title="Overwatch" /></StatButtonSwitch>}
            {!this.fortnitedataexists && <FortniteForm />}
            {this.fortnitedataexists && <StatButtonSwitch onClick={this.showFortniteStats}><Game image="/images/games/fortnite.png" title="Fortnite" /></StatButtonSwitch>}
            {!this.loldataexists && <LOLForm />}
            {this.loldataexists && <StatButtonSwitch onClick={this.showLOLStats}><Game image="/images/games/leagueof.png" title="League of Legends" /></StatButtonSwitch>}
          </GamesList>
          </SidebarEmbed>
        </MainContent>
      </div>
    )
  }
}


export default Profile