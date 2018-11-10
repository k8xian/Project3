import React from "react";
import styled from 'styled-components';

const StyledStat = styled.li`
`

const StyledStatName = styled.div`
float: left;
clear: both;
line-height: 30px;
`

const StyledStatValue = styled.div`
float: left;
margin-left: 10px;
color: #00fff4;
line-height: 30px;
`

const Stat = props =>(
    <StyledStat>
        <StyledStatName>{props.statname || "Kill Count"}: </StyledStatName>
        <StyledStatValue> {props.statvalue || " 20"}</StyledStatValue>
    </StyledStat>
);

export default Stat;