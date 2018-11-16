import React, { Component } from "react";
import styled from 'styled-components';
// import BioForm from '../Forms/BioForm';
// import { SubmitButton } from '../Elements/index'
import API from '../../../utils/API'
import { SubmitButton } from '../../Elements/index'

const ProfileInfo = styled.div`
    height: 200px;
    float: left;
    padding-right: 20px;
    width: 88%;
    text-align: justify;
    margin: auto;
`

const StyledTextArea = styled.textarea`
    width: 90%;
    background-color: rgba(255,255,255,.1);
    border: 0;
    border-radius: 0px;
    margin: 10px auto;
    color: white;
    height: 66px !important;
    padding: 3px;
`

const StyledBioForm = styled.form`
    width: 90%;
`

const StyledBio = styled.p`
    margin-top: 11px;
    margin-bottom: 0px;
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
`


class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formIsHidden: true,
      isHidden: true
    };
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
      bio: profileInformation.Bio,
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  showEditForm(event) {
    event.preventDefault();
    this.setState({
      formIsHidden: !this.state.formIsHidden
    })
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  BioForm = () => (
    <StyledBioForm onSubmit={this.handleSubmit}>
      <StyledTextArea
        rows="8"
        name="bio"
        value={this.state.bio}
        onChange={this.handleInputChange}
      />
      <SubmitButton
        id="bioSubmit"
        onClick={this.handleSubmit}
      />
    </StyledBioForm>
  )

  handleSubmit(event) {
    event.preventDefault();
    API.updateBio({
      userAccountName: this.state.userAccountName,
      updateBio: this.state.bio
    }).then(res => this.toggleHidden());
  }

  //todo
  // show form only if you click the edit button
  // hide bio when form is shown
  // hide the form when you hit the submit button

  render() {
    return (
      <ProfileInfo>
        <StyledEditButton onClick={this.toggleHidden.bind(this)} />
        <StyledBio>
          {this.state.bio}
        </StyledBio>
        {!this.state.isHidden && <this.BioForm />}
      </ProfileInfo>
    );
  }
}

export default Bio;