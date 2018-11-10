import React from "react";
import styled from 'styled-components';
import { Stat } from '../Elements/index'

const StyledStatBlock = styled.ul`
columns: 4;
width: 90%;
margin: 20px auto;
list-style-type: none;
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
const FortniteStats = props =>(
<StyledStatBlock>
    <Stat statname="fortnite" statvalue="10000"/>
    <Stat/>
    <Stat/>
    <Stat/>
    <Stat/>
    <Stat/>
    <Stat/>
    <Stat/>
    <Stat/>
    <Stat/>
    <Stat/>
    <StyledRefreshStats>Refresh Stats</StyledRefreshStats>
</StyledStatBlock>
);

export default FortniteStats;