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
//move the form outside as the hide element

class LOLForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formIsHidden: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let ServerSelector = document.getElementById("lol-selector");
    let SelectedServer = ServerSelector.options[ServerSelector.selectedIndex].value;
    let saveThisUID = this.state.LOLUID.trim();

    if (/\s/.test(saveThisUID)) {
      saveThisUID = saveThisUID.split(' ').join('+');
    }
    
    if (SelectedServer === "" || this.state.LOLUID === "") {
      return //Put an error message here later
    } else {
      API.updateAndScrapeLOL({
        userAccountName: this.state.userAccountName,
        UID: saveThisUID,
        Platform: SelectedServer,
      }).then(res => this.setState({
        isHidden: !this.state.isHidden
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
      LOLUID: profileInformation.LOL.UID,
      Platform: profileInformation.LOL.Platform
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  LOLForm = () => (
    <StyledForm onSubmit={this.handleSubmit}>
      <InputBlock>
        <StyledSocialInput
          value={this.state.LOLUID}
          onChange={this.handleInputChange}
          placeholder={this.state.LOLUID}
          name="LOLUID" />
        <SocialSubmitButton type="submit" value=">" />
      </InputBlock>
      <div className="dropdown">
        <select id="lol-selector">
          <option value="">Choose Server</option>
          <option value="br">Brazil</option>
          <option value="eune">EU North East</option>
          <option value="euw">EU West</option>
          <option value="kr">Korea</option>
          <option value="lan">Latin America North</option>
          <option value="las">Latin America South</option>
          <option value="na">North America</option>
          <option value="oce">Oceana</option>
          <option value="ru">Russia</option>
          <option value="tr">Turkey</option>
          <option value="jp">Japan</option>
        </select>
      </div>
    </StyledForm>
  )


  toggleLOLForm(event) {
    event.preventDefault();
    this.setState({
      formIsHidden: !this.state.formIsHidden
    })
  }

  render() {
    return (
      <div>
        <StyledSocialAdd onClick={this.toggleLOLForm.bind(this)} >
          Add LoL
                </StyledSocialAdd>
        {!this.state.formIsHidden && <this.LOLForm />}

      </div>
    );
  }
}

export default LOLForm;
