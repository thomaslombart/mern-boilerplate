import axios from 'axios';
import jwt from 'jsonwebtoken';

import {flash} from '../index';

export const AUTH_USER = 'AUTH_USER';
export const SIGNOUT = 'SIGNOUT';

/* signup */
export const signup = (username, password, passwordVerification) => dispatch => {
    console.log(username)
    axios
        .post('/api/auth/signup', {username, password, passwordVerification})
        .then(response => {
            const token = response.data;
            localStorage.setItem('jwt', token);
            axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
            dispatch({type: AUTH_USER, user: jwt.decode(token)});
            flash('Vous êtes bien inscrit!');
        });
}

/* signin */
export const signin = (username, password) => dispatch => {
    axios
        .post('/api/auth/signin', {username, password})
        .then(response => {
            const token = response.data;
            localStorage.setItem('jwt', token);
            axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
            dispatch({type: AUTH_USER, user: jwt.decode(token)});
            flash('Vous êtes maintenant connecté!');
        });
}

/* signout */
export const signout = () => {
    localStorage.removeItem('jwt');
    return {type: SIGNOUT};
}