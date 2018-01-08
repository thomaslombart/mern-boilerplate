import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {signup} from '../../actions/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordVerification: ''
    };
    this.handleSubmitClick = this
      .handleSubmitClick
      .bind(this);
    this.handleUsernameChange = this
      .handleUsernameChange
      .bind(this);
    this.handlePasswordChange = this
      .handlePasswordChange
      .bind(this);
    this.handlePasswordVerificationChange = this
      .handlePasswordVerificationChange
      .bind(this);
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handlePasswordVerificationChange(e) {
    this.setState({passwordVerification: e.target.value});
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handleSubmitClick() {
    this.props.signup(this.state.username, this.state.password, this.state.passwordVerification);
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 className="text-center my-3">Inscription</h2>
              <form>
                <div className="form-group">
                  <label>Pseudo</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    onChange={this.handleUsernameChange}/>
                </div>
                <div className="form-group">
                  <label>Mot de passe</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={this.handlePasswordChange}/>
                </div>
                <div className="form-group">
                  <label>Vérification du mot de passe</label>
                  <input
                    type="password"
                    name="passwordVerification"
                    className="form-control"
                    onChange={this.handlePasswordVerificationChange}/>
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmitClick}>Envoyer</button>
              </form>
              <hr/>
              <p className="text-center">
                <Link to="/signin">Vous avez déjà un compte ?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func
};

const mapDispatchToProps = dispatch => bindActionCreators({
  signup
}, dispatch);

Signup = connect(null, mapDispatchToProps)(Signup);

export default Signup;