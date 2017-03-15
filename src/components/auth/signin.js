import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form'; // Old version 4.1.3
import { signinUser } from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {
    static contextTypes = {
        store: PropTypes.object
    }

    handleFormSubmit({ email, password }) {
        console.log(email, password);
        //console.log(this.context.store.getState());
        this.props.signinUser({ email, password });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className='form-group'>
                    <label>Email:</label>
                    <Field name="email" component="input" className='form-control' />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Password:</label>
                    <Field name="password" component="input" className='form-control' />
                </fieldset>
                <button action='submit' className='btn btn-primary'>Sign in</button>
            </form>
        );
    }
}

export default connect(null, { signinUser })(reduxForm({
    form: 'signinForm'
})(Signin));