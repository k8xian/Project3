import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (OriginalComponent) => {
    class MixedComponent extends Component {

        checkAuth() {
            // Check whether the user is authenticated
            if (!this.props.isAuth && !this.props.jwtToken) {
                console.log('Access Denied!');
                this.props.history.push('/'); // send user back to home page if not authenticated
            }
        }

        componentDidMount() {
            // Check whether the user is authenticated
            this.checkAuth();
        }

        componentDidUpdate() {
            // Check whether the user is authenticated
            this.checkAuth();
        }

        render() {
            return <OriginalComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {
            isAuth: state.auth.isAuthenticated,
            jwtToken: state.auth.token
        }
    }

    return connect(mapStateToProps)(MixedComponent);
};
