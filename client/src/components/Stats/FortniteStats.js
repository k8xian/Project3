import React from "react";
import styled from 'styled-components';
import { Stat } from '../Elements/index'

const StyledStatBlock = styled.ul`
columns: 3;
width: 100%;
margin: 20px 0;
list-style-type: none;
`
const StatWrapper = styled.div`
width: 90%;
margin: auto;
`
const StatTitle = styled.h2`
font-weight: 300;
`

const StyledRefreshStats = styled.button`
clear: both;
display: block;
width: 100px;
height: 20px;
background-color: rgba(0,0,0,0);
border-radius: 0;
border: 1px solid #00fff4;
color: #00fff4;
cursor: pointer;
margin: 20px 0;
float: left;
`

// add statname= and statvalue= to each prop stat to define a stat
const FortniteStats = props => (
  <StatWrapper>
    <StatTitle>Fortnite</StatTitle>
    <StyledStatBlock>
      <Stat statname="Games Played" statvalue={props.fortniteData.gamesPlayed}/>
      <Stat statname="Kill/Death Ratio" statvalue={`${props.fortniteData.kdRatio}`}/>
      <Stat statname="Total Kills" statvalue={props.fortniteData.totalKills}/>
      <Stat statname="Total Wins" statvalue={props.fortniteData.totalWins}/>
      <Stat statname="Win Rate" statvalue={`${props.fortniteData.winRate}`}/>
      <Stat statname="Time Played" statvalue={`${props.fortniteData.timePlayed} hours`}/>
    </StyledStatBlock>
    <StyledRefreshStats onClick={props.handleGetNewFortniteData}>Refresh Stats</StyledRefreshStats> 
  </StatWrapper>
);

export default FortniteStats;