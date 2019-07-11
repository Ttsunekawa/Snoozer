import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { fetchInvite, receiveInvite } from '../../actions/league_actions';

import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => {
  let nextPath;
  if (ownProps.location.nextPath && ownProps.location.nextPath.includes("/invites")) {
    nextPath = ownProps.location.nextPath
    dispatch(receiveInvite(nextPath))
  } else {
    nextPath = null
  }

  return({
    errors: state.errors.sessionErrors,
    formType: 'Sign Up',
    navLink: <Link className="right-header-action" to="/login">Login</Link>,
    onboardText: "Let's get started by creating an account",
    emailPlace: "Enter email",
    passwordPlace: "Set a password",
    nextPath: nextPath
  })
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchInvite: (url) => dispatch(fetchInvite(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);