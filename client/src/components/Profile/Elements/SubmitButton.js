import React from "react";
import styled from 'styled-components';

const StyledSubmit = styled.input`
    width: 100px;
    height: 36px;
    border-radius: 0;
    background-color: #00fff4;
    color: rgba(0,0,0,.72);
    border: 0;
`

const SubmitButton = props =>(
    <StyledSubmit type="submit" value="Save" id={props.id}/>
);

export default SubmitButton;