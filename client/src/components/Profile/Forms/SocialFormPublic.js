//style display of current state in an anchor tag
//store data in the backend
//pull out data from the backend

import React from "react";
import styled from 'styled-components';
import SocialLink from '../../Profile/Detail/SocialLink';
import API from '../../../utils/API';


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

class SocialFormPublic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      twitchIsHidden: true,
      twitterIsHidden: true,
      instagramIsHidden: true
    };

    this.handleTwitchSubmit = this.handleTwitchSubmit.bind(this);
    this.handleTwitterSubmit = this.handleTwitterSubmit.bind(this);
    this.handleInstagramSubmit = this.handleInstagramSubmit.bind(this);
  }

  async componentDidMount() {
    let url = new URL(document.URL);
    const parseURL = url.pathname.split("/");
    let userAccountName = parseURL[2];

    //This will await the data that is retrieved through the call to the backend
    //And then it will save it to the profileInformation variable
    //Then set state to the retrieved information, while preserving what was there
    const getProfileInformation = await API.getProfileInformation({ userAccountName: userAccountName });
    let profileInformation = getProfileInformation.data;
    this.setState({
      userAccountName: userAccountName,
      twitch: profileInformation.Twitch,
      instagram: profileInformation.Instagram,
      twitter: profileInformation.Twitter,
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTwitchSubmit(event) {
    event.preventDefault();
    API.updateTwitch({
      userAccountName: this.state.userAccountName,
      updateTwitch: this.state.twitch
    }).then(res =>
      this.setState({
        twitchIsHidden: !this.state.twitchIsHidden,
      }));
  }

  handleTwitterSubmit(event) {
    event.preventDefault();
    API.updateTwitter({
      userAccountName: this.state.userAccountName,
      updateTwitter: this.state.twitter
    }).then(res =>
      this.setState({
        twitterIsHidden: !this.state.twitterIsHidden,
      }));
  }

  handleInstagramSubmit(event) {
    event.preventDefault();
    API.updateInstagram({
      userAccountName: this.state.userAccountName,
      updateInstagram: this.state.instagram
    }).then(res =>
      this.setState({
        instagramIsHidden: !this.state.instagramIsHidden,
      }));
    //hide the form
  }

  TwitchForm = () => (
    <StyledForm>
      <StyledSocialInput
        value={this.state.twitch}
        onChange={this.handleInputChange}
        name="twitch"
        placeholder={this.state.twitch || "@"} />
      <SocialSubmitButton
        type="submit"
        value=">"
        onClick={this.handleTwitchSubmit} />
    </StyledForm>
  )

  TwitterForm = () => (
    <StyledForm>
      <StyledSocialInput
        value={this.state.twitter}
        onChange={this.handleInputChange}
        name="twitter"
        placeholder={this.state.twitter || "@"} />
      <SocialSubmitButton
        type="submit"
        value=">"
        onClick={this.handleTwitterSubmit} />
    </StyledForm>
  )

  InstagramForm = () => (
    <StyledForm>
      <StyledSocialInput
        value={this.state.instagram}
        onChange={this.handleInputChange}
        name="instagram"
        placeholder={this.state.instagram || "@"} />
      <SocialSubmitButton
        type="submit"
        value=">"
        onClick={this.handleInstagramSubmit} />
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
        {/* <StyledSocialAdd onClick={this.toggleTwitch.bind(this)} >
          Add Twitch
                </StyledSocialAdd> */}
        {!this.state.twitchIsHidden && <this.TwitchForm />}
        {this.state.twitchIsHidden && <SocialLink site="Twitch" url={this.state.twitch} username={this.state.twitch}></SocialLink>}

        {/* <StyledSocialAdd onClick={this.toggleTwitter.bind(this)} >
          Add Twitter
                </StyledSocialAdd> */}

        {!this.state.twitterIsHidden && <this.TwitterForm />}
        {this.state.twitterIsHidden && <SocialLink site="Twitter" url={this.state.twitter} username={this.state.twitter}></SocialLink>}
        {/* <StyledSocialAdd onClick={this.toggleInstagram.bind(this)} >
          Add Instagram
                </StyledSocialAdd> */}

        {!this.state.instagramIsHidden && <this.InstagramForm />}
        {this.state.instagramIsHidden && <SocialLink site="Instagram" url={this.state.instagram} username={this.state.instagram}></SocialLink>}
      </div>
    );
  }
}

export default SocialFormPublic;
