import React from "react";
import styled from 'styled-components';

const StyledEdit = styled.button`
background-repeat: no-repeat;
background-size: contain;
float: right;
height: 18px;
width: 18px;
margin-top: 0;
background: rgba(0,0,0,0);
border: 0;
background-image: url('/images/icons/edit.svg');
cursor: pointer;
`

const EditButton = props =>(
    <StyledEdit id={props.id}/>
);

export default EditButton;