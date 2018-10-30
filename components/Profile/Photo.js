import React from "react";
import styled from 'styled-components';

const ProfilePicture = styled.div`
width: 25%;
height: 200px;
float: left;
`

const Photo = props =>(
    <ProfilePicture><img src={props.src || "https://via.placeholder.com/200"}></img></ProfilePicture>
);

export default Photo;