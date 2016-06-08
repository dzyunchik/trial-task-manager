import {
    LOADING_START,
    LOADING_FINISHED
} from '../constants/ActionTypes';

const ui = (state = {
    isLoading: false
}, action) => {
    switch (action.type) {
        case LOADING_START:
            return Object.assign({}, state, {isLoading: true});
        case LOADING_FINISHED:
            return Object.assign({}, state, {isLoading: false});
        default:
            return state;
    }
};

export default ui;