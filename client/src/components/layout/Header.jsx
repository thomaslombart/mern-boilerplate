import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { signout } from '../../actions/auth';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        const userLinks = (
            <ul>
                <li>
                    <a onClick={() => this.props.signout()}>
                        <i className="fas fa-sign-out-alt"></i> Signout
                    </a>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul>
                <li>
                    <Link to="/signin">
                        <i className="fas fa-sign-in-alt"></i> Signin
                    </Link>
                </li>
                <li>
                    <Link to="/signup">
                        <i className="fas fa-user-plus"></i> Signup
                    </Link>
                </li>
            </ul>
        );

        return (
            <nav>
                <h2>
                    Full Stack app
                </h2>
                <div>
                    <ul>
                        <li>
                            <Link to="/">
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/protected">
                                <i className="fas fa-lock"></i> Protected
                            </Link>
                        </li>
                    </ul>
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

const mapStateToProps = state => ({ auth: state.auth });

const mapDispatchToProps = dispatch => bindActionCreators({
    signout
}, dispatch);

Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

export default Header;