import React from "react";
import styled from 'styled-components';

const StyledPost = styled.div`
width: 90%;
display: block;
clear: both;
align-self: flex-end;
margin: auto;
`

const PostTitle = styled.h3`
`

const PostDate = styled.div`
font-size: .8rem;
font-style: italic;
color: rgba(255,255,255,.6);
`

const PostContent = styled.div`
`

const PostBlock = props =>(
    <StyledPost>
        <PostTitle>
            {props.title || "Post Title"}
        </PostTitle>
        <PostDate>
            {props.date || "DD/MM/YYYY"}
        </PostDate>
        <PostContent>
            {props.post || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </PostContent>
    </StyledPost>
);

export default PostBlock;