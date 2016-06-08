import React from 'react';
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux';
import { browserHistory } from 'react-router'
import {Nav, NavItem} from 'react-bootstrap';

import * as actionCreators from '../actions/index';
//import App from './App';
//import Test from './Test';

class MainMenu extends React.Component {
    changeLocation(e) {
        browserHistory.push(e.target.pathname);
        e.preventDefault();
    }

    createItems(items) {
        return items.map((item, index) => {
            return(
                <NavItem key={index} href={item.link} onClick={this.changeLocation.bind(this)}>{item.title}</NavItem>
            );
        });
    }

    render() {
        return (
            <Nav bsStyle='pills'>{this.createItems(this.props.items)}</Nav>
        );
    }
}


export default MainMenu;