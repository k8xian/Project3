import React from "react";
import styled from 'styled-components';

const ProfilePicture = styled.div`
width: 25%;
height: 200px;
float: left;
`


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
`


class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: "https://via.placeholder.com/200",
            alt: "profile picture for this user",
            photoFormIsHIdden: true
        }

        this.handleSrcChange = this.handleSrcChange.bind(this);
        this.handleSrcSubmit = this.handleSrcSubmit.bind(this);
    }

    handleSrcChange(event) {
        this.setState({ src: event.target.Twitter });
    }

    handleSrcSubmit(event) {
        event.preventDefault();
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    ImageForm = () => (
        <StyledForm onSubmit={this.handleSrcChange}>
            <StyledSocialInput value={this.state.src} onChange={this.handleSrcChange} placeholder={this.state.src} />
            <SocialSubmitButton type="submit" value=">" />
        </StyledForm>
    )


    render() {
        return (
            
            <ProfilePicture>
                <StyledEditButton onClick={this.toggleHidden.bind(this)} />
                {!this.state.isHidden && <this.ImageForm />}
                <img src={this.state.src} alt={this.state.alt} />
            </ProfilePicture>
     );
    }

}

export default Photo;

