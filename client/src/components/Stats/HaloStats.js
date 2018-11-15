import React from "react";
import styled from 'styled-components';
import { Stat } from '../Elements/index'


const StyledStatBlock = styled.ul`
columns: 4;
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
const HaloStats = props => (
  <StatWrapper>
    <StatTitle>Halo 5</StatTitle>
    <StyledStatBlock>
      <Stat statname="Kill/Death Ratio" statvalue={props.halo5Data.kdRatio} />
      <Stat statname="Kills per Game" statvalue={props.halo5Data.killsPerGame} />
      <Stat statname="Games played" statvalue={props.halo5Data.gamesPlayed} />
      <Stat statname="Win Rate" statvalue={props.halo5Data.winRate} />
      <Stat statname="Headshot %" statvalue={`${props.halo5Data.headshotPercent}`} />
      <Stat statname="Time Played" statvalue={`${props.halo5Data.timePlayed}`}/>
    </StyledStatBlock>
    <StyledRefreshStats onClick={props.handleGetNewHalo5Data}>Refresh Stats</StyledRefreshStats>
  </StatWrapper>
);

export default HaloStats;