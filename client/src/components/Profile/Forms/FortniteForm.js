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

class FortniteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            formIsHidden: true,
        };

        this.handleFortniteChange = this.handleFortniteChange.bind(this);
        this.handleFortniteSubmit = this.handleFortniteSubmit.bind(this);
    }

    handleFortniteChange(event) {
        this.setState({ username: event.target.username });
    }

    handleFortniteSubmit(event) {
        //hide the form
        event.preventDefault();
    }


    FortniteForm = () => (
        <StyledForm onSubmit={this.handleFortniteSubmit}>
            <StyledSocialInput value={this.state.username} onChange={this.handleFortniteChange} placeholder={this.state.username } />
            <SocialSubmitButton type="submit" value=">" />
            <div className="dropdown">
                <button className="dropbtn">Platform:</button>
                <div className="dropdown-content">
                    <a href="#" value="pc">PC</a>
                    <a href="#" value="ps4">PlayStation</a>
                    <a href="#" value="xbox">XBox</a>
                </div>
            </div>
        </StyledForm>
    )


    toggleFortniteForm(event) {
        event.preventDefault();
        this.setState({
            formIsHidden: !this.state.formIsHidden
        })
    }

    render() {
        return (
            <div>
                <StyledSocialAdd onClick={this.toggleFortniteForm.bind(this)} >
                    Add Fortnite
                </StyledSocialAdd>
                {!this.state.formIsHidden && <this.FortniteForm />}
                
            </div>
        );
    }
}

export default FortniteForm;
