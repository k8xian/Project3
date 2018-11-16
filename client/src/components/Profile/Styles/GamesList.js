import React from "react";
import styled from 'styled-components';


const GamesWrapper = styled.div`
width: 100%;
float: left;
display: flex;
-webkit-box-pack: center;
justify-content: center;
flex-direction: column;
`

const GamesList = props =>(
    <GamesWrapper>{props.children}</GamesWrapper>
);

export default GamesList;