import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {signout} from '../../actions/auth';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        const userLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                        <i className="fas fa-user"></i> Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => this.props.signout()}>
                        <i className="fas fa-sign-in-alt"></i> Signout
                    </a>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                        <i className="fas fa-sign-in-alt"></i> Signin
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                        <i className="fas fa-user-plus"></i> Signup
                    </Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h2 className="navbar-brand">
                    ArcadiaA
                </h2>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {this.props.auth.isAuthenticated
                        ? userLinks
                        : guestLinks}
                </div>
            </nav>
        )
    }
}

Header.propTypes = {
    auth: PropTypes.object,
    signout: PropTypes.func
};

const mapStateToProps = state => ({auth: state.auth});

const mapDispatchToProps = dispatch => bindActionCreators({
    signout
}, dispatch);

Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

export default Header;