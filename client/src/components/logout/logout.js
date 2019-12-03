import React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from "../../store/actions/authActions";

export class Logout extends React.Component {

    componentDidMount() {
        this.props.logoutUser();
        this.props.history.replace('/')
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(null, { logoutUser })(Logout)
