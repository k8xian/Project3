import React from "react";
import styled from 'styled-components';

const Detail = styled.div`
height: calc(100vh - 200px);
width: 75%;
float: left;
display: block;
overflow: auto;
`

const MainDetail = props =>(
    <Detail>{props.children}</Detail>
)

export default MainDetail;