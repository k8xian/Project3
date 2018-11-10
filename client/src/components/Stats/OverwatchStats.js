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
const OverwatchStats = props =>(
<StyledStatBlock>
    <Stat statname="overwatch" statvalue="10000"/>
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
</StyledStatBlock>
);

export default OverwatchStats;