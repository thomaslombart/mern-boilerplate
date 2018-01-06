import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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

  handleSubmitClick() {}

  render() {
    return (
      <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                        <h2 className="text-center my-3">Inscription</h2>
                            <form>
                                <div className="form-group">
                                    <label for="pseudo">Pseudo</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        onChange={this.handleUsernameChange}/>

                                </div>
                                <div className="form-group">
                                    <label for="password">Mot de passe</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        onChange={this.handlePasswordChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="password_verification">Vérification du mot de passe</label>
                                    <input
                                        type="password"
                                        name="password_verification"
                                        className="form-control"
                                        onChange={this.handlePasswordVerificationChange}/>
                                </div>
                                <button className="btn btn-primary btn-block" onClick={this.handleSubmitClick}>Envoyer</button>
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

export default Signup;