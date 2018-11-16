//style display of current state in an anchor tag
//store data in the backend
//pull out data from the backend

import React from "react";
import styled from 'styled-components';
import GlobalStyle from '../../GlobalStyle';


const StyledNav = styled.nav`
width: 100%;
background-color: rgba(0,0,0,.8);
height: 40px;
color: white;
`

const StyledProfileName = styled.h1`
`


const Header = props => (
    <div>
        <GlobalStyle />
        <StyledNav>
            <StyledProfileName>{props.id || "PLAYERNAME"}</StyledProfileName>
            <ul>
                <li>
                    <a href="/logout">
                        Logout
                            </a>
                </li>
            </ul>
        </StyledNav>
    </div >
);

export default Header;
