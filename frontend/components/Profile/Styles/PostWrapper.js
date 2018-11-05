import React from "react";
import styled from 'styled-components';

const PostContainer = styled.div`
height: calc(500px);
width: 100%;
float: left;
display: block;
overflow: auto;
border-top: 1px solid rgba(255,255,255,.05);
`

const PostWrapper = props =>(
    <PostContainer>{props.children}</PostContainer>
)

export default PostWrapper;