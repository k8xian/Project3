//have a dropdown that lets you select available social media platforms
//once one is selected, show a form that lets you enter your handle
//convert this data to a link and display it

//save the input data to the backend
import React from "react";
import styled from 'styled-components';

// const StyledLink = styled.div`
// width: 100%;
// display: block;
// clear: both;
// align-self: flex-end;
// `

// const SocialLink = props => (

//     <StyledLink>
//         {props.site || "site"}: <a href={props.url}>@ {props.username || "username"}</a>
//     </StyledLink>
// );


class SocialForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Twitch' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('You selected:  ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            // <form onSubmit={this.handleSubmit}>
            //     <label>
            //         Add a social media link:
            //   <select value={this.state.value} onChange={this.handleChange}>
            //             <option value="Twitch">Twitch</option>
            //             <option value="Twitter">Twitter</option>
            //             <option value="Instagram">Instagram</option>
            //         </select>
            //     </label>
            //     <input type="submit" value="Submit" />
            // </form>
            <div>
                <input type="button" value="Connect Twitch"></input>
                <input type="button" value="Connect Twitter"></input>
                <input type="button" value="Connect Instagram"></input>
            </div>
        );
    }
}

export default SocialForm;
