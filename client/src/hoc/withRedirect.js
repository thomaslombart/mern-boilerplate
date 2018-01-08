import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

export default function withRedirect(WrappedComponent) {
    class RedirectIfLogged extends Component {
        render() {
            const {from} = this.props.location.state || {
                from: {
                    pathname: '/'
                }
            };
            if (this.props.auth.isAuthenticated) {
                return (<Redirect to={from.pathname}/>)
            }
            return <WrappedComponent {...this.props}/>
        }
    }

    RedirectIfLogged.propTypes = {
        auth: PropTypes.object
    };

    const mapStateToProps = (state) => ({auth: state.auth});

    RedirectIfLogged = connect(mapStateToProps)(RedirectIfLogged);

    return RedirectIfLogged;
}