import React, { Component } from "react";
import styled from 'styled-components';
// import BioForm from '../Forms/BioForm';
import { SubmitButton } from '../Elements/index'
import API from '../../../utils/API'

const ProfileInfo = styled.div`
    height: 200px;
    float: left;
    padding-right: 20px;
    padding-top: 25px;
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
            value: 'This is your bio! Click the edit button to edit.',
            formIsHidden: true,
            isHidden: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }



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
            <StyledTextArea rows="8" value={this.state.value} onChange={this.handleChange} />
            <SubmitButton id="bioSubmit" />
        </StyledBioForm>
    )

    handleSubmit(event) {
        alert('You changed your bio:  ' + this.state.Bio);
        event.preventDefault();
        if (this.state.Bio) {
            API.saveBio({
                bio: this.state.Bio
            })
                .then(res => this.saveBio())
                .catch(err => console.log(err));
        }
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
                    {this.state.value}
                </StyledBio>
                {!this.state.isHidden && <this.BioForm />}
            </ProfileInfo>
        );
    }
}

export default Bio;