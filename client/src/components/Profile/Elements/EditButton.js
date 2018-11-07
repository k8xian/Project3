import React from "react";
import styled from 'styled-components';

const StyledEdit = styled.div`
background-repeat: no-repeat;
background-size: contain;
float: right;
height: 18px;
width: 18px;
margin-top: -11px;
background-image: URL('/static/assets/images/icons/edit.svg');
cursor: pointer;
`

const EditButton = props =>(
    <StyledEdit id={props.id}/>
);

export default EditButton;