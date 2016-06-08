import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/index';

class AuthForm extends React.Component {
    submit(e) {
        e.preventDefault();
        this.props.testLoginFinish();
    }

    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.submit.bind(this)}>
                    <p>
                        <label for="name">
                            <span>Name</span>
                            <input type="text" name="name" placeholder="name"/>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="password">
                            <span>Password</span>
                            <input type="password" name="password" placeholder="password"/>
                        </label>
                    </p>
                    <p>
                        <input type="submit"/>
                    </p>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, actionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);