import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

import {flash} from '../index';

export default function withAuthenticate(WrappedComponent) {
    class Authenticate extends Component {
        render() {
            if (!this.props.auth.isAuthenticated) {
                flash('You must be logged to acess that page', 'warning');
                return (<Redirect
                    to={{
                    pathname: '/signin',
                    state: {
                        from: this.props.location
                    }
                }}/>)
            }
            return <WrappedComponent {...this.props}/>
        }
    }

    Authenticate.propTypes = {
        auth: PropTypes.object
    };

    const mapStateToProps = (state) => ({auth: state.auth});

    Authenticate = connect(mapStateToProps)(Authenticate);

    return Authenticate;
}