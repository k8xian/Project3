import React from "react";
import styled from 'styled-components';

const StyledLogo = styled.div`
cursor: pointer;
background-image: url(static/assets/images/logos/logo.svg);
width: 300px;
height: 116px;
margin: auto;
background-size: contain;
background-repeat: no-repeat;
background-position: center 64px;
`

const Logo = props =>(
    <StyledLogo/>
);

export default Logo;