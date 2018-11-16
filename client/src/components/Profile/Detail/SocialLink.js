import React from "react";
import styled from 'styled-components';

const StyledLink = styled.div`
width: 100%;
display: block;
clear: both;
align-self: flex-end;
border-bottom: 1px dotted rgba(255,255,255,.2);
`;

const StyledSocialLink = styled.a`
color: #00fff4;
text-decoration: none;
margin-left: 4px;
font-weight: 500;
font-size: 1.1rem;
cursor: pointer;
`;

const SocialLink = props =>(
    <StyledLink>
        {props.site || "site"}: <StyledSocialLink href={props.url} target="_blank">@ {props.username || "username" }</StyledSocialLink>
    </StyledLink>
);

export default SocialLink;