import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createLeague, deleteLeague, fetchLeagues } from '../../actions/league_actions';
import Leagues from './leagues';

const mapStateToProps = (state) => {
  let users = state.entities.users
  let id = state.session.id


  return ({
    currentUser: users[id],
    leagues: Object.values(state.entities.leagues)
  })
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createLeague: league => dispatch(createLeague(league)),
  deleteLeague: id => dispatch(deleteLeague(id)),
  fetchLeagues: () => dispatch(fetchLeagues())
});

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);