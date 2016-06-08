import React from 'react';
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux';
import { browserHistory } from 'react-router'

import * as actionCreators from '../actions/index';

class ErrorMessage extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return ((nextProps.error) && this.props.error !== nextProps.error);
    }

    render() {
        if (!this.props.error) {
            return <div style={{display: 'none'}}></div>;
        }
        return (
            <div>{this.props.error.message}</div>
        );
    }
}


export default ErrorMessage;