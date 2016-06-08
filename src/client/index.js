import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux';

import reducers from '../shared/reducers/index';
import BaseLayout from '../shared/components/layouts/BaseLayout';
import {getUserInfo} from '../shared/actions/index';

let store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
);

store.dispatch(getUserInfo());

ReactDom.render(
    <Provider store={store}>
        <BaseLayout/>
    </Provider>,
    document.getElementById('app-container')
);
