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
margin: 20px 0;
float: left;
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

class HaloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            formIsHidden: true,
        };

        this.handleHaloChange = this.handleHaloChange.bind(this);
        this.handleHaloSubmit = this.handleHaloSubmit.bind(this);
    }

    handleHaloChange(event) {
        this.setState({ username: event.target.username });
    }

    handleHaloSubmit(event) {
        //hide the form
        event.preventDefault();
    }


    HaloForm = () => (
        <StyledForm onSubmit={this.handleHaloSubmit}>
            <StyledSocialInput value={this.state.username} onChange={this.handleHaloChange} placeholder={this.state.username } />
            <SocialSubmitButton type="submit" value=">" />
        </StyledForm>
    )


    toggleHaloForm(event) {
        event.preventDefault();
        this.setState({
            formIsHidden: !this.state.formIsHidden
        })
    }

    render() {
        return (
            <div>
                <StyledSocialAdd onClick={this.toggleHaloForm.bind(this)} >
                    Add Halo 5
                </StyledSocialAdd>
                {!this.state.formIsHidden && <this.HaloForm />}
                
            </div>
        );
    }
}

export default HaloForm;
