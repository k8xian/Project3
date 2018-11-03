import React from "react";
import styled from 'styled-components';

const Stats = styled.div`
width: 100%;
height: calc(100vh - 200px);
clear: both;
`

const StatsWrapper = props =>(
    <Stats>{props.children}</Stats>
);

export default StatsWrapper;