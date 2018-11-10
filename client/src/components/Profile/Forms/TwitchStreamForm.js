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

class TwitchStreamForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            twitch: '',
            twitter: '',
            instagram: '',
            isToggleOn: true,
            twitchIsHidden: true,
            twitterIsHidden: true,
            instagramIsHidden: true

        };

        this.handleTwitchChange = this.handleTwitchChange.bind(this);

        this.handleTwitchSubmit = this.handleTwitchSubmit.bind(this);
    }

    handleTwitchChange(event) {
        this.setState({ twitch: event.target.twitch });
    }

    handleTwitchSubmit(event) {
        // alert('Twitch stream was updated to' + this.state.twitch);
        //hide the form
        event.preventDefault();
    }


    TwitchForm = () => (
        <StyledForm onSubmit={this.handleTwitchSubmit}>
            <StyledSocialInput value={this.state.twitch} onChange={this.handleTwitchChange} placeholder={this.state.twitch } />
            <SocialSubmitButton type="submit" value=">" />
        </StyledForm>
    )


    toggleTwitchEmbed(event) {
        event.preventDefault();
        this.setState({
            twitchIsHidden: !this.state.twitchIsHidden
        })
    }

    render() {
        return (
            <div>
                <StyledSocialAdd onClick={this.toggleTwitchEmbed.bind(this)} >
                    Embed Twitch
                </StyledSocialAdd>
                {!this.state.twitchIsHidden && <this.TwitchForm />}
                <p>{this.state.twitch}</p>
            </div>
        );
    }
}

export default TwitchStreamForm;
