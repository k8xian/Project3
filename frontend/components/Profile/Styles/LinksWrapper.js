import React from "react";
import styled from 'styled-components';

const LinksBlock = styled.div`
height: 200px;
width: 25%;
float: left;
display: flex;
flex-flow: row wrap;
`

const LinksWrapper = props =>(
    <LinksBlock>{props.children}</LinksBlock>
);

export default LinksWrapper;