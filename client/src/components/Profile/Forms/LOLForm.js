//style display of current state in an anchor tag
//store data in the backend
//pull out data from the backend

import React from "react";
import styled from 'styled-components';


const StyledSocialAdd = styled.button`
clear: both;
display: block;
width: 100px;
height: 20px;
background-color: rgba(0,0,0,0);
border-radius: 0;
border: 1px solid #00fff4;
color: #00fff4;
cursor: pointer;
margin: 20px auto;
`

const StyledSocialInput = styled.input`
float: left;
margin: 20px 0 20px 20px;
background-color: rgba(0,0,0,0);
border: 0;
color: white;
line-height: 20px;
height: 20px;
border-bottom: 1px solid white;
padding: 0 3px;
width: 120px;
`

const SocialSubmitButton = styled.input`
width: 20px;
height: 20px;
background-color: rgba(0,0,0,0);
border: 1px solid #00fff4;
float: left;
display: block;
margin: 21px 0 -1px 0;
cursor: pointer;
color: #00fff4;
text-align: center;
line-height: 20px;
`

const StyledForm = styled.form`
float: left;
`

//move the form outside as the hide element

class LOLForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            formIsHidden: true,
        };

        this.handleLOLChange = this.handleLOLChange.bind(this);
        this.handleLOLSubmit = this.handleLOLSubmit.bind(this);
    }

    handleLOLChange(event) {
        this.setState({ username: event.target.username });
    }

    handleLOLSubmit(event) {
        //hide the form
        event.preventDefault();
    }


    LOLForm = () => (
        <StyledForm onSubmit={this.handleLOLSubmit}>
            <StyledSocialInput value={this.state.username} onChange={this.handleLOLChange} placeholder={this.state.username} />
            <SocialSubmitButton type="submit" value=">" />
            <div className="dropdown">
                <button className="dropbtn">Platform:</button>
                <div className="dropdown-content">
                    <a href="#" value="br">Brazil</a>
                    <a href="#" value="eune">EU North East</a>
                    <a href="#" value="euw">EU West</a>
                    <a href="#" value="lan">Latin America North</a>
                    <a href="#" value="las">Latin America South</a>
                    <a href="#" value="na">North America</a>
                    <a href="#" value="oce">Oceana</a>
                    <a href="#" value="ru">Russia</a>
                    <a href="#" value="tr">Turkey</a>
                    <a href="#" value="jp">Japan</a>
                </div>
            </div>
        </StyledForm>
    )


    toggleLOLForm(event) {
        event.preventDefault();
        this.setState({
            formIsHidden: !this.state.formIsHidden
        })
    }

    render() {
        return (
            <div>
                <StyledSocialAdd onClick={this.toggleLOLForm.bind(this)} >
                    Add LoL
                </StyledSocialAdd>
                {!this.state.formIsHidden && <this.LOLForm />}

            </div>
        );
    }
}

export default LOLForm;
