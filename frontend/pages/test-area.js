import { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import TestButton from '../components/TestButton';
import React from 'react';
import API from '../utils/API'

export default class extends React.Component {
    state = {
        platform: "",
        UID: "",
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFetch = () => {
        //First be sure we collected this.state properly
        //Then from the api file we call a specific method, in this case we will be testing halo
        //
        console.log(this.state);
        API.getHalo5({
            UID: this.state.UID
        })
        .then(res => console.log(res));
    };

    //On button click this will fire and handle the fetch.
    handleFormSubmit = event => {
        event.preventDefault();
        this.handleFetch();
    }

    //Render the test button and pass it the functions handleFormSubmit and handleInputChange
    //This.state will collect the text entered into the text box
    render() {
        return (
            < div >
                <TestButton
                    platform={this.state.platform}
                    UID={this.state.UID}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
            </div >
        )
    }
}