import React from 'react';

const Form = props => (
    <form>
        <div>
            <label>Platform</label>
            <input className="platform"
                value={props.platform}
                onChange={props.handleInputChange}
                placeholder="What platform?"
                name="platform"
                required
            />
            <label>User Name</label>
            <input className="user-name"
                value={props.UID}
                onChange={props.handleInputChange}
                placeholder="What is yout username?"
                name="UID"
                required
            />
            <button className="submit-btn"
                onClick={props.handleFormSubmit}
            >
                Submit
            </button>
        </div>
    </form>
)

export default Form;