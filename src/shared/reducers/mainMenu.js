import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_LOGIN_FINISH,
    AUTH_LOGOUT_FINISH
} from '../constants/ActionTypes';

const mainMenu = (state = {}, action) => {
    return {
        items: [
            {
                id: 1,
                title: 'App',
                link: '/'
            },

            {
                id: 2,
                title: 'Test',
                link: '/test'
            }
        ]
    }
};

export default mainMenu;