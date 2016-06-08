import React from 'react';
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

import * as actionCreators from '../../actions/index';

class Test extends React.Component {
    render() {
        return (
            <div>Test is worked</div>
        );
    }
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, actionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);