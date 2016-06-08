import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {Form, FormControl, PageHeader, Button} from 'react-bootstrap';

import * as actionCreators from '../../actions/index';
import ErrorMessage from '../ErrorMessage';

class AuthForm extends React.Component {
    constructor() {
        super(...arguments);

        this.name = '';
        this.password = '';
    }

    submit(e) {
        e.preventDefault();
        this.props.login(this.name, this.password);
    }

    updateName(e) {
        this.name = e.target.value;
    }
    updatePassword(e) {
        this.password = e.target.value;
    }

    render() {
        return (
            <div>
                <ErrorMessage error={this.props.auth.error} />
                <PageHeader>Sign In</PageHeader>
                <Form onSubmit={this.submit.bind(this)}>
                    <p>
                        <label for="name">
                            <span>Name</span>
                            <FormControl onChange={this.updateName.bind(this)}
                                         type="text" name="name" id="name" placeholder="name"/>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="password">
                            <span>Password</span>
                            <FormControl onChange={this.updatePassword.bind(this)}
                                         type="password" name="password" id="password" placeholder="password"/>
                        </label>
                    </p>
                    <p>
                        <Button type="submit">Send</Button>
                    </p>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {auth: state.auth}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, actionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);