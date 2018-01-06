import {
    AUTH_USER,
    SIGNOUT
} from '../actions/auth';

const auth = (state = {}, action) => {
    switch (action.type) {
        case SIGNOUT:
            return {
                isAuthenticated: false
            };
        case AUTH_USER:
            return {
                isAuthenticated: true,
                user: action.user
            }
        default:
            return state;
    }
}

export default auth;