import React from "react";
import styled from 'styled-components';
import { Stat } from '../Elements/index'

const StyledStatBlock = styled.ul`
columns: 4;
width: 90%;
margin: 20px auto;
list-style-type: none;
`

// add statname= and statvalue= to each prop stat to define a stat
// use component will mount to map out the data here
const Allstats = props => (
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
);

export default Allstats;