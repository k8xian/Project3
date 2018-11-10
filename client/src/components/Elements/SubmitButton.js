import React from "react";
import styled from 'styled-components';

const StyledSubmit = styled.input`
    width: 100px;
    height: 20px;
    border-radius: 0;
    border: 1px solid #00fff4;
    color: #00fff4;
    background-color: rgba(0,0,0,0);
`

const SubmitButton = props =>(
    <StyledSubmit type="submit" value="Save" id={props.id}/>
);

export default SubmitButton;