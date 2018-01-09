import axios from 'axios';
import jwt from 'jsonwebtoken';

import {
    flash
} from '../index';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const SIGNOUT = 'SIGNOUT';

/* signup */
export const signup = ({
    username,
    password,
    passwordVerification
}) => dispatch => {
    axios
        .post('/api/auth/signup', {
            username,
            password,
            passwordVerification
        })
        .then(response => {
            const token = response.data;
            localStorage.setItem('jwt', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            dispatch({
                type: AUTH_USER,
                user: jwt.decode(token)
            });
            flash('Welcome!');
        })
        .catch(error => {
            dispatch({
                type: AUTH_FAILURE,
                errors: error.response.data
            });
        });
}

/* signin */
export const signin = ({
    username,
    password
}) => dispatch => {
    axios
        .post('/api/auth/signin', {
            username,
            password
        })
        .then(response => {
            const token = response.data;
            localStorage.setItem('jwt', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            dispatch({
                type: AUTH_USER,
                user: jwt.decode(token)
            });
            flash('Welcome back!');
        }).catch(error => {
            dispatch({
                type: AUTH_FAILURE,
                errors: error.response.data
            });
        });
}

/* signout */
export const signout = () => {
    localStorage.removeItem('jwt');
    delete axios.defaults.headers.common['Authorization'];
    return {
        type: SIGNOUT
    };
}