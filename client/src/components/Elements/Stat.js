import React from "react";
import styled from 'styled-components';

const StyledStat = styled.li`
display: flex;
flex-direction: row;
margin-bottom: 50px;
justify-content: center;
`

const StyledStatName = styled.div`
font-size: .8rem;
line-height: 1.5rem;
font-weight: 300;
text-transform: uppercase;
letter-spacing: 1px;
width: 30%;
`

const StyledStatValue = styled.div`
margin-left: 10px;
color: #00fff4;
width: 70%;
`

const Stat = props =>(
    <StyledStat>
        <StyledStatName>{props.statname || "Kill Count Long"}&nbsp;: </StyledStatName>
        <StyledStatValue> {props.statvalue || " 20 Long Long Long"}</StyledStatValue>
    </StyledStat>
);

export default Stat;