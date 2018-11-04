import React from "react";
import styled from 'styled-components';

const StyledHeader = styled.div`
width: 100%;
height: 200px;
box-shadow: 0 3px 0 rgba(0,0,0,.3);
display: block;
`

const ProfileHeader = props =>(
    <StyledHeader>{props.children}</StyledHeader>
);

export default ProfileHeader;