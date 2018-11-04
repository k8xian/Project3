import React from "react";
import styled from 'styled-components';

const MainBody = styled.div`
width: 100%;
`

const MainContent = props =>(
    <MainBody>{props.children}</MainBody>
);

export default MainContent;