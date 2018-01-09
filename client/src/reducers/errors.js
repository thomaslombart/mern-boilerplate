import {
    AUTH_USER,
    AUTH_FAILURE,
    SIGNOUT
} from '../actions/auth';
import {
    CLEAR_ERRORS
} from '../actions/errors';


const auth = (state = {}, action) => {
    switch (action.type) {
        case AUTH_FAILURE:
            return {
                ...action.errors
            }
        case CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
}

export default auth;