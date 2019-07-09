import { connect } from 'react-redux';
import { createLeague } from '../../../actions/league_actions';
import { clearErrors } from '../../../actions/session_actions';

import LeaguesForm from './leagues_form';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.sessionErrors,
  name: "",
  amount_of_teams: "",
  image_url: "",
  user_id: state.entities.users[state.session.id].id,
  scoringType: null,
  leagueType: null,
  formType: "CREATE"
});

const mapDispatchToProps = dispatch => ({
  submitAction: league => dispatch(createLeague(league)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaguesForm);