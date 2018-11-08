import React from "react";
import styled from 'styled-components';


const GamesWrapper = styled.div`
height: 160px;
width: 100%;
float: left;
display: block;
border-bottom: 1px solid rgba(0,0,0,.2);
display: flex;
justify-content: center;
flex-flow: row no-wrap;
overflow-x: scroll;
overflow-y: hidden;
`

const GamesList = props =>(
    <GamesWrapper>{props.children}</GamesWrapper>
);

export default GamesList;