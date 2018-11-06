import React, { Component } from "react";
import styled from 'styled-components';
// import BioForm from '../Forms/BioForm';
import { EditButton, SubmitButton } from '../Elements/index'

const ProfileInfo = styled.div`
height: 200px;
float: left;
padding-right: 20px;
padding-top: 32px;
width: 88%;
text-align: justify;
margin: auto;
`


const StyledBioForm = styled.form`
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
class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Input your bio here...'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('The bio was updated ' + this.state.value);
        event.preventDefault();
    }


    //add later for backend integration - when bio is saved to mongoose
    //   componentDidMount() {
    //     this.loadBio();
    //   }
    //   loadBio = () => {
    //     API.getBio()
    //       .then(res => this.setState({ bio: res.data }))
    //       .catch(err => console.log(err));
    //   };

    // componentDidMount() {
    //     this.setState({bio: "Enter your bio here"})
    // }


    //todo
    // save input as new state
    // show form only if you click the edit button
    //hide bio when form is shown
    // hide the form when you hit the submit button

    render() {
        return (
            <ProfileInfo>
                {this.state.value}
                <EditButton id={'editBio'} />
                <StyledBioForm onSubmit={this.handleSubmit}>
                    <StyledTextArea rows="8" value={this.state.value} onChange={this.handleChange} placeholder={this.state.value || "Create your bio here"} />
                    <SubmitButton id="bioSubmit" />
                </StyledBioForm>
            </ProfileInfo>

        );
    }
}

export default Bio;