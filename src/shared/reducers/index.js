import { combineReducers } from 'redux';
import auth from './auth';
import mainMenu from './mainMenu';

export default combineReducers({
    auth,
    mainMenu
});
