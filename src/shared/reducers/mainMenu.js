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
                title: 'Tasks on me',
                link: '/onme'
            },

            {
                id: 3,
                title: 'My tasks',
                link: '/byme'
            },

            {
                id: 4,
                title: 'Logout',
                link: '/logout'
            }
        ]
    }
};

export default mainMenu;