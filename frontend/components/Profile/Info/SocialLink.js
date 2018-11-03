import React from "react";
import styled from 'styled-components';

const StyledLink = styled.div`
width: 100%;
display: block;
clear: both;
align-self: flex-end;
`

const SocialLink = props =>(
    <StyledLink>
        {props.site || "site"}: <a href={props.url}>@ {props.username || "username" }</a>
    </StyledLink>
);

export default SocialLink;