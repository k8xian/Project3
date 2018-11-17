import React from "react";
import styled from 'styled-components';

const GameBlock = styled.div`
height: 82px;
width: 100px;
display: block;
cursor: pointer;
margin: 10px auto;
background-color: #00fff4;
border: 3px solid #00fff4;
color: rgba(0,0,0,.72);
`
const GameTitle = styled.h3`
text-align: center;
font-size: .65rem;
line-height: 0px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 1px;
`

const Game = props =>(

    //something about adding a new prop
    //something about adding a new 
    <GameBlock>
        <img src={props.image || "https://via.placeholder.com/100x60.png"}/>
        <GameTitle>{props.title || "Game Title"}</GameTitle>
    </GameBlock>
);

export default Game;