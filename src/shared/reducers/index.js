import { combineReducers } from 'redux';
import auth from './auth';
import mainMenu from './mainMenu';
import ui from './ui';

export default combineReducers({
    auth,
    mainMenu,
    ui
});
