import React from "react";
import styled from 'styled-components';

const EmbedWrapper = styled.div`
height: calc(100vh - 200px);
width: 25%;
background-color: rgba(255,255,255,.03);
float: left;
`

const Embed = props =>(
    <EmbedWrapper/>
);

export default Embed;