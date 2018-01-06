import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Header extends Component {
    componentDidMount() {
        axios
            .get("/api")
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
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
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">
                                <i className="fas fa-sign-in-alt"></i>
                                Connexion
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">
                                <i className="fas fa-user-plus"></i>
                                Inscription
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;