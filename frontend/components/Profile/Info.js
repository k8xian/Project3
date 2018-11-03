import React from "react";
import styled from 'styled-components';

const ProfileInfo = styled.div`
height: 200px;
width: 50%;
float: left;
padding-right: 20px;
margin-left: -20px;
padding-top: 32px;
margin-bottom: -32px;
`

const Info = props =>(
    <ProfileInfo>
        {props.info || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
    </ProfileInfo>
);

export default Info;