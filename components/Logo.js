import React from "react";
import styled from 'styled-components';

const StyledLogo = styled.div`
margin: 24px 0;
cursor: pointer;
background-image: url('Public/assets/logos/logo.svg')
width: 300px;
height: 200px;
margin: auto;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-color: hotpink;
`

const Logo = props =>(
    <StyledLogo/>
);

export default Logo;