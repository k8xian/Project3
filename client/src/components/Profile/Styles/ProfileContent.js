import React from "react";
import styled from 'styled-components';

const ProfileInfo = styled.div`
height: 200px;
width: 50%;
float: left;
`

const ProfileContent = props =>(
    <ProfileInfo>{props.children}</ProfileInfo>
)

export default ProfileContent;