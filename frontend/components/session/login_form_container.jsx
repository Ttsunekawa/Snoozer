import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.sessionErrors,
  formType: 'Login',
  navLink: <Link className ="right-header-action" to="/signup">Don't have an account? Sign Up!</Link>,
  onboardText: "Sign in using email or username",
  emailPlace: "Enter email",
  passwordPlace: "Enter password"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);