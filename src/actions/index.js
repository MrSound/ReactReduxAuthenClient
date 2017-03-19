import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const API_URL = 'http://localhost:5000';

export function signupUser({ email, password }) {
    return (dispatch) => {
        axios.post(`${API_URL}/signup`, { email, password })
            .then((res) => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', res.data.token);
                browserHistory.push('/feature');
            })
            .catch((err) => {
                //dispatch(authError(res.data.error));
                //console.log('catchs:', err.response.data.error);
                dispatch(authError(err.response.data.error));
            });
    }
}

export function signinUser({ email, password }) {
    return (dispatch) => {
        // Submit email and password to server
        axios.post(`${API_URL}/signin`, { email, password })
            .then(res => {
                // If request is good
                // - Update state to indicate user in authenticated
                dispatch({ type: AUTH_USER });
                // - Save the JWT token
                localStorage.setItem('token', res.data.token);
                // - Redirect to the route '/feature'
                browserHistory.push('/feature');
            }).catch(function (error) {
                // If request is bad
                // - Show an error to the user
                //console.log(error);
                dispatch(authError('Bad Login Info'));
            });
    }
};

export function signoutUser() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

