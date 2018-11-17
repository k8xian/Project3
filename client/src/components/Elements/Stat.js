import React from "react";
import styled from 'styled-components';

const StyledStat = styled.li`
display: flex;
flex-direction: row;
margin-bottom: 50px;
justify-content: left;
`

const StyledStatName = styled.div`
font-weight: 300;
text-transform: uppercase;
letter-spacing: 1px;
display: intline-block;
`

const StyledStatValue = styled.div`
margin-left: 10px;
color: #00fff4;
display: inline-block;
`

const Stat = props =>(
    <StyledStat>
        <StyledStatName>{props.statname || "Kill Count"}&nbsp;: </StyledStatName>
        <StyledStatValue> {props.statvalue || " 20"}</StyledStatValue>
    </StyledStat>
);

export default Stat;