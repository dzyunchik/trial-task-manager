import * as ActionTypes from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch'

export const login = () => {
    return {
        type: ActionTypes.AUTH_LOGIN
    }
};

export const logout = () => {
    return {
        type: ActionTypes.AUTH_LOGIN
    }
};

export const testLoginFinish = () => {
    return (dispatch, getState) => {
        dispatch(loginFinish());
    }
};


export const loginFinish = () => {
    return {
        type: ActionTypes.AUTH_LOGIN_FINISH
    }
};

export const logoutFinish = () => {
    return {
        type: ActionTypes.AUTH_LOGOUT_FINISH
    }
};

