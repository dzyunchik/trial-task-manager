import React from 'react';
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

import * as actionCreators from '../../actions/index';
import App from './App';
import Test from './Test';

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
                <Route path="/test" component={Test}/>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, actionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);