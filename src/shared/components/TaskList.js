import React from 'react';
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux';
import { browserHistory } from 'react-router'
import {Nav, NavItem} from 'react-bootstrap';

import * as actionCreators from '../actions/index';
//import App from './App';
//import Test from './Test';

class TaskList extends React.Component {
    changeLocation(e) {
        browserHistory.push(e.target.pathname);
        e.preventDefault();
    }

    createItems(tasks) {
        return tasks.map((item, index) => {
            return(
                <div>qwe</div>
                //<NavItem key={index} href='/tasks/view/'{item.id} onClick={this.changeLocation.bind(this)}>{item.title}</NavItem>
            );
        });
    }

    render() {
        return (
            <Nav >{this.createItems(this.props.tasks)}</Nav>
        );
    }
}


export default TaskList;