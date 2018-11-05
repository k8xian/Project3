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
        console.log(this.state);
        API.getHalo5({
            UID: this.state.UID
        })
        .then(res => console.log(res));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.handleFetch();
    }

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