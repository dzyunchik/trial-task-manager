import * as ActionTypes from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
//var ajax = require('es-ajax');
var AjaxPromise = require('ajax-promise');

//
// Auth
//
export const login = (name, password) => {
    return dispatch => {
        return AjaxPromise
            .post('/api/auth/login', {
                name: name,
                password: password
            })
            .then(function (response) {
                console.log('login:', response);
                dispatch(loginFinish(response.data));
            })
            .catch(function (err) {
                dispatch(loginError(err.error));
            });
    }
};
export const loginFinish = (user) => {
    return {
        type: ActionTypes.AUTH_LOGIN_FINISH,
        user
    }
};
export const loginError = (error) => {
    return {
        type: ActionTypes.AUTH_LOGIN_ERROR,
        error
    }
};

export const getUserInfo = () => {
    return dispatch => {
        dispatch(startLoading());

        return AjaxPromise
            .get('/api/auth/userInfo')
            .then(function (response) {
                dispatch(stopLoading());
                dispatch(loginFinish(response.data));
            })
            .catch(function (err) {
                dispatch(stopLoading());
                loginError(err);
            });
    }
};

export const logout = () => {
    return dispatch => {
        dispatch(startLoading());

        return AjaxPromise
            .get('/api/auth/logout')
            .then(function (response) {
                dispatch(stopLoading());
                dispatch(logoutFinish(response.data));
            })
            .catch(function (err) {
                dispatch(stopLoading());
                dispatch(logoutError(err));
            });
    }
};
export const logoutFinish = () => {
    return {
        type: ActionTypes.AUTH_LOGOUT_FINISH
    }
};
export const logoutError = (error) => {
    return {
        type: ActionTypes.AUTH_LOGOUT_ERROR,
        error
    }
};

//
// UI
//
export const startLoading = () => {
    return {
        type: ActionTypes.LOADING_START
    }
};
export const stopLoading = () => {
    return {
        type: ActionTypes.LOADING_FINISHED
    }
};

//
// Tasks
//
export const getTasks = (filter) => {
    return dispatch => {
        dispatch(startLoading());

        return AjaxPromise
            .get('/api/tasks', {
                filter: filter
            })
            .then(function (response) {
                dispatch(stopLoading());
                dispatch(updateTasks(response.data));
            })
            .catch(function (err) {
                dispatch(stopLoading());
                updateError(err);
            });
    }
};
export const updateTasks = (tasks) => {
    return {
        type: ActionTypes.UPDATE_TASKS,
        tasks
    }
};
