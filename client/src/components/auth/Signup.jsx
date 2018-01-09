import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Form from '../form/Form';

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
  }

  handleSubmitClick() {
    this
      .props
      .signup(this.state.username, this.state.password, this.state.passwordVerification);
  }

  render() {
    const fields = [
      {
        text: 'Username',
        type: 'text',
        name: 'username',
        placeholder: 'John Doe'
      }, {
        text: 'Password',
        type: 'password',
        name: 'password'
      }, {
        text: 'Verification password',
        type: 'password',
        name: 'passwordVerification'
      }
    ];
    return (
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 className="text-center my-3">Signup</h2>
              <Form fields={fields} triggerSubmitFunction={this.props.signup}/>
              <hr/>
              <p className="text-center">
                <Link to="/signin">Already have an account ?</Link>
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