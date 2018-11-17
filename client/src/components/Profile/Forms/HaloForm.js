//style display of current state in an anchor tag
//store data in the backend
//pull out data from the backend

import React from "react";
import API from '../../../utils/API';
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
margin: auto;
`

const InputBlock = styled.div`
margin: auto;
text-align: center;
display: block;
width: 173px;
height: 50px;
`

class HaloForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Halo5UID: '',
      formIsHidden: true,
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
      Halo5UID: profileInformation.Halo5.UID,
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
    console.log(this.state);
    API.updateAndScrapeHalo5({
      userAccountName: this.state.userAccountName,
      UID: this.state.Halo5UID
    }).then(res => this.setState({
      isHidden: !this.state.isHidden
    }));
  }

  HaloForm = () => (
    <StyledForm onSubmit={this.handleSubmit}>
      <InputBlock>
        <StyledSocialInput
          value={this.state.Halo5UID}
          onChange={this.handleInputChange}
          placeholder={this.state.Halo5UID}
          name="Halo5UID"
        />
        <SocialSubmitButton
          type="submit"
          value=">"
        />
      </InputBlock>
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
