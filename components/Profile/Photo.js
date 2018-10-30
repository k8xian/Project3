import React from "react";
import styled from 'styled-components';

const ProfilePicture = styled.div`
width: 25%;
height: 200px;
background-color: hotpink;
float: left;
`

const Photo = props =>(
    <ProfilePicture/>
);

export default Photo;