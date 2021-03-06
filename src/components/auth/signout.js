import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    }

    componentWillMount() {
        this.props.signoutUser();
        //this.context.router.push('/');
    }

    render() {
        return (
            <div>Sorry to see you go...</div>
        );
    }
}

export default connect(null, actions)(SignOut);