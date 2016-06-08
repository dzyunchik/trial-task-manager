import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_LOGIN_FINISH,
    AUTH_LOGOUT_FINISH,
    AUTH_LOGIN_ERROR
} from '../constants/ActionTypes';

const auth = (state = {
    isAuthorized: false,
    user: null,
    error: null
}, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return state;
        case AUTH_LOGOUT:
            return state;
        case AUTH_LOGIN_FINISH:
            return Object.assign({}, state, {
                isAuthorized: true,
                user: action.user
            });
        case AUTH_LOGOUT_FINISH:
            return Object.assign({}, state, {
                isAuthorized: false,
                user: null
            });
        case AUTH_LOGIN_ERROR:
            return Object.assign({}, state, {
                error: {
                    message: action.error.message || 'Unknown error while logging in'
                }
            });
        default:
            return state;
    }
};

export default auth;