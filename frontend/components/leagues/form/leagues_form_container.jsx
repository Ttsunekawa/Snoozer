import { connect } from 'react-redux';
import { createLeague } from '../../../actions/league_actions';
import { clearErrors } from '../../../actions/session_actions';

import LeaguesForm from './leagues_form';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.sessionErrors
  
});

const mapDispatchToProps = dispatch => ({
  createLeague: league => dispatch(createLeague(league)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaguesForm);