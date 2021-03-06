//style display of current state in an anchor tag
//store data in the backend
//pull out data from the backend

import React from "react";
import API from '../../../utils/API';
import styled from 'styled-components';
import GlobalStyle from '../../../GlobalStyle';


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

//move the form outside as the hide element

class OverwatchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      formIsHidden: true,
      wasUpdated: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let ServerSelector = document.getElementById("overwatch-selector");
    let SelectedServer = ServerSelector.options[ServerSelector.selectedIndex].value;
    let saveThisUID = this.state.username.trim();
    //console.log(this.state);

    if (saveThisUID.includes("#")) {
      saveThisUID = saveThisUID.split("#").join("-");
    }

    if (SelectedServer === "" || saveThisUID === "") {
      return //Put an error message here later
    } else {
      API.updateAndScrapeOverwatch({
        userAccountName: this.state.userAccountName,
        UID: saveThisUID,
        Platform: SelectedServer,
      }).then(res => this.setState({
        isHidden: !this.state.isHidden,
        wasUpdated: true,
      }));
    }
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
      OverwatchUID: profileInformation.Overwatch.UID,
      Platform: profileInformation.Overwatch.Platform
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  OverwatchForm = () => (
    <StyledForm onSubmit={this.handleSubmit}>
      <InputBlock>
        <StyledSocialInput value={this.state.username} name="username" onChange={this.handleInputChange} placeholder={this.state.username} />
        <SocialSubmitButton type="submit" value=">" />
      </InputBlock>
      <div className="dropdown">
        <select id="overwatch-selector">
          <option value="">Choose Server</option>
          <option value="pc">PC</option>
          <option value="psn">PlayStation</option>
          <option value="xbl">XBox</option>
        </select>
      </div>
    </StyledForm>
  )


  toggleOverwatchForm(event) {
    event.preventDefault();
    this.setState({
      formIsHidden: !this.state.formIsHidden
    })
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <StyledSocialAdd onClick={this.toggleOverwatchForm.bind(this)} >
          Add Overwatch
                </StyledSocialAdd>
        {!this.state.formIsHidden && <this.OverwatchForm />}

      </div>
    );
  }
}

export default OverwatchForm;
