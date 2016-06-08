import React from 'react';
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

import * as actionCreators from '../../actions/index';
import {Well} from 'react-bootstrap';
import TaskList from '../TaskList';

class Tasks extends React.Component {
    render() {
        //this.props.getTasks(this.props.filter);

        return (
            <Well>
                <div>test</div>
            </Well>
        );
    }
}

function mapStateToProps(state) {
    return { filteredTasks: state.filteredTasks }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, actionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
