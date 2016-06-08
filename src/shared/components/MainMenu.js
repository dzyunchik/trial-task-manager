import React from 'react';
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux';
import { browserHistory } from 'react-router'

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
                <li key={index}>
                    <a href={item.link} onClick={this.changeLocation.bind(this)}>{item.title}</a>
                </li>
            );
        });
    }

    render() {
        console.log('main menu');
        return (
            <ul>{this.createItems(this.props.items)}</ul>
        );
    }
}


export default MainMenu;