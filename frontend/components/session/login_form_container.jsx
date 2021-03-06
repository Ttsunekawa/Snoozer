import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let nextPath;
  let link;


  if(Object.keys(state.invite).length === 0){
    nextPath = null
    link =  <Link className="right-header-action" to="/signup">Don't have an account? Sign Up</Link> 
  } else {
    nextPath = state.invite
    link = <Link className="right-header-action" to={nextPath}>Don't have an account? Sign Up</Link>
  };

  return ({
    errors: state.errors.sessionErrors,
    formType: 'Login',
    navLink: link,
    onboardText: "Sign in using email or username",
    emailPlace: "Enter email",
    passwordPlace: "Enter password",
    state: state,
    nextPath: nextPath
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);