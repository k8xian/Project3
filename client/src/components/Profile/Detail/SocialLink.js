import React from "react";
import styled from 'styled-components';

const StyledLink = styled.div`
width: 100%;
display: block;
clear: both;
align-self: flex-end;
font-size: .7rem;
text-transform: uppercase;
font-weight: 500;
letter-spacing: 1px;
`;

const StyledSocialLink = styled.a`
color: #00fff4;
text-decoration: none;
margin-left: 4px;
font-weight: 500;
font-size: 1.1rem;
cursor: pointer;
text-transform: lowercase;
`;

const SocialLink = props =>(
    <StyledLink>
        {props.site || "site"}: <StyledSocialLink href={props.url} target="_blank">@ {props.username || "username" }</StyledSocialLink>
    </StyledLink>
);

export default SocialLink;