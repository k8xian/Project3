//have a dropdown that lets you select available social media platforms
//once one is selected, show a form that lets you enter your handle
//convert this data to a link and display it

//save the input data to the backend
import React from "react";
import styled from 'styled-components';
import { SubmitButton } from '../Elements/index'

// const StyledLink = styled.div`
// width: 100%;
// display: block;
// clear: both;
// align-self: flex-end;
// `

// const SocialLink = props => (

//     <StyledLink>
//         {props.site || "site"}: <a href={props.url}>@ {props.username || "username"}</a>
//     </StyledLink>
// );


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
width: 80px;
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

class SocialForm extends React.Component {
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
        this.handleTwitterChange = this.handleTwitterChange.bind(this);
        this.handleInstagramChange = this.handleInstagramChange.bind(this);

        this.handleTwitchSubmit = this.handleTwitchSubmit.bind(this);
        this.handleTwitterSubmit = this.handleTwitterSubmit.bind(this);
        this.handleInstagramSubmit = this.handleInstagramSubmit.bind(this);
    }

    handleTwitchChange(event) {
        this.setState({ twitch: event.target.twitch });
    }

    handleInstagramChange(event) {
        this.setState({ instagram: event.target.instagram });
    }

    handleTwitterChange(event) {
        this.setState({ twitter: event.target.twitter });
    }

    handleTwitchSubmit(event) {
        alert('Twitch was updated to' + this.state.twitch);
        //hide the form
        event.preventDefault();
    }

    handleTwitterSubmit(event) {
        alert('Twitter was updated to' + this.state.twitter);
        //hide the form
        event.preventDefault();
    }

    handleInstagramSubmit(event) {
        alert('Instagram was updated to ' + this.state.instagram);
        //hide the form
        event.preventDefault();
    }

    TwitchForm = () => (
        <StyledForm>
            <StyledSocialInput value={this.state.twitch} onChange={this.handleTwitchChange} placeholder={this.state.twitch || "@"} />
            <SocialSubmitButton type="submit" value=">" />
        </StyledForm>
    )

    TwitterForm = () => (
        <StyledForm>
            <StyledSocialInput value={this.state.twitter} onChange={this.handleTwitterChange} placeholder={this.state.twitter || "@"} />
            <SocialSubmitButton type="submit" value=">" />
        </StyledForm>
    )

    InstagramForm = () => (
        <StyledForm>
            <StyledSocialInput value={this.state.instagram} onChange={this.handleInstagramChange} placeholder={this.state.instagram || "@"} />
            <SocialSubmitButton type="submit" value=">" />
        </StyledForm>
    )

    toggleTwitch(event) {
        event.preventDefault();
        this.setState({
            twitchIsHidden: !this.state.twitchIsHidden
        })
    }
    toggleTwitter(event) {
        event.preventDefault();
        this.setState({
            twitterIsHidden: !this.state.twitterIsHidden
        })
    }
    toggleInstagram(event) {
        event.preventDefault();
        this.setState({
            instagramIsHidden: !this.state.instagramIsHidden
        })
    }

    render() {
        return (
            <div>
                <StyledSocialAdd onClick={this.toggleTwitch.bind(this)} >
                    Add Twitch
                </StyledSocialAdd>
                {!this.state.twitchIsHidden && <this.TwitchForm />}
                <p>{this.state.twitch}</p>
                <StyledSocialAdd onClick={this.toggleTwitter.bind(this)} >
                    Add Twitter
                </StyledSocialAdd>
                {!this.state.twitterIsHidden && <this.TwitterForm />}
                <p>{this.state.twitter}</p>
                <StyledSocialAdd onClick={this.toggleInstagram.bind(this)} >
                    Add Instagram
                </StyledSocialAdd>
                {!this.state.instagramIsHidden && <this.InstagramForm />}
                <p>{this.state.instagram}</p>
            </div>
        );
    }
}

export default SocialForm;
