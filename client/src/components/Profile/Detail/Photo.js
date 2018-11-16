import React, { Component } from "react";
import styled from 'styled-components';
import API from '../../../utils/API';

const ProfilePicture = styled.div`
width: 25%;
height: 200px;
float: left;
`;

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
`;

const StyledSocialInput = styled.input`
margin: 60px auto 0;
background-color: rgba(0,0,0,0);
border: 0;
color: white;
line-height: 20px;
height: 20px;
border-bottom: 1px solid white;
padding: 0 3px;
width: 80%;
display: block;
`;

const SocialSubmitButton = styled.input`
width: 100px;
height: 20px;
background-color: rgba(0,0,0,0);
border: 1px solid #00fff4;
display: block;
margin: 21px auto -1px;
cursor: pointer;
color: #00fff4;
text-align: center;
clear: both;
font-size: .7rem;
`;

const StyledForm = styled.form`
float: left;
margin-bottom: -61px;
width: 100%;
`;
const StyledEditButton = styled.button`
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
position: absolute;
left: 205px;
`;

const StyledImg = styled.img`
border-radius: 50%;
margin: 20px;
height: 150px;
border: 6px solid #ffffff33;
`;

const ProfilePic = styled.div`
border-radius: 50%;
margin: 20px;
height: 150px;
width: 150px;
border: 6px solid #00fff4;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
box-shadow: 0 4px 9px black;
`

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "https://www.esportsonly.com/assets/Uploads/Players/_resampled/ScaleHeightWyI1NDAiXQ/saahil-universe-arora.jpg",
      // the real default image
      // src: "https://via.placeholder.com/200",
      alt: "profile picture for this user",
      isHidden: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
      src: profileInformation.ProfileImage,
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    API.updateProfileImage({
      userAccountName: this.state.userAccountName,
      updateProfileImage: this.state.profileImage
    }).then(res => this.setState({
      isHidden: !this.state.isHidden
    }));
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  ImageForm = () => (
    <StyledForm onSubmit={this.handleSubmit} >
      <StyledSocialInput value={this.state.src} onChange={this.handleInputChange} placeholder={this.state.src} name="src" />
      <SocialSubmitButton type="submit" value="Save" />
    </StyledForm>
  )


  render() {

    const style = {
      backgroundImage: "url(" + this.state.src + ")"
    }

    return (

      <ProfilePicture>
        {this.state.isHidden && <StyledEditButton onClick={this.toggleHidden.bind(this)} />}
        <StyledEditButton onClick={this.toggleHidden.bind(this)} />
        {!this.state.isHidden && <this.ImageForm />}
        {/* {this.state.isHidden && <StyledImg src={this.state.src} alt={this.state.alt} />} */}
        {this.state.isHidden && <ProfilePic style={style} />}
      </ProfilePicture>
    );
  }

}

export default Photo;

