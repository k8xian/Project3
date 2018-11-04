import React from "react";
import styled from 'styled-components';

const PostContainer = styled.div`
height: calc(500px);
width: 75%;
float: left;
display: block;
overflow: auto;
`

const PostWrapper = props =>(
    <PostContainer>{props.children}</PostContainer>
)

export default PostWrapper;