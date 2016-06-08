import React from 'react';
import {connect} from 'react-redux';
import {Well} from 'react-bootstrap';
import {bindActionCreators} from 'redux'

import AuthForm from '../forms/AuthForm';
import AppRouter from '../containers/AppRouter';
import MainMenu from '../MainMenu';
//import {logout} from '../../actions/index';

import * as actionCreators from '../../actions/index';

class BaseLayout extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        if (this.props.ui.isLoading) {
            return <Well>Loading...</Well>;
        } else if (!this.props.auth.isAuthorized) {
            return <Well><AuthForm/></Well>;
        }
        return (
            <div>
                <Well>
                    <span>Welcome, {this.props.auth.user.name} | </span>
                    <a href="" onClick={this.logout.bind(this)}>Logout</a>
                </Well>
                <Well>
                    <MainMenu items={this.props.mainMenu.items}/>
                </Well>
                <Well><AppRouter/></Well>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        mainMenu: state.mainMenu,
        ui: state.ui
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, actionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
