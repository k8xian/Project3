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
// use component will mount to map out the data here
const Allstats = props => (
    <StatWrapper>
        <StatTitle>All Stats</StatTitle>
        <StyledStatBlock>
            <Stat statname="allstats" statvalue="10000" />
            <Stat />
            <Stat />
            <Stat />
            <Stat />
            <Stat />
            <Stat />
            <Stat />
            <Stat />
            <Stat />
            <Stat />
        </StyledStatBlock>
        <StyledRefreshStats>Refresh Stats</StyledRefreshStats>
    </StatWrapper>
);

export default Allstats;