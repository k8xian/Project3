import React from "react";
import styled from 'styled-components';

const GameBlock = styled.div`
height: 150px;
width: 100px;
float: left;
display: block;
margin: 10px;
cursor: pointer;
`
const GameTitle = styled.h3`
text-align: center;
font-size: .7rem;
line-height: 12px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 1px;
`

const Game = props =>(

    //something about adding a new prop
    //something about adding a new 
    <GameBlock>
        <img src={props.image || "https://via.placeholder.com/100x110.png"}/>
        <GameTitle>{props.title || "Game Title"}</GameTitle>
    </GameBlock>
);

export default Game;