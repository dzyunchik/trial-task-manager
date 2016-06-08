import React from 'react';
import {connect} from 'react-redux';

import AuthForm from '../forms/AuthForm';
import AppRouter from '../containers/AppRouter';
import MainMenu from '../MainMenu';

class BaseLayout extends React.Component {
    render() {
        console.log(this.props);
        if (!this.props.auth.isAuthorized) {
            return <AuthForm/>;
        }
        return (
            <div>
                <MainMenu items={this.props.mainMenu.items}/>
                <AppRouter/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        mainMenu: state.mainMenu
    }
}

export default connect(mapStateToProps)(BaseLayout);
