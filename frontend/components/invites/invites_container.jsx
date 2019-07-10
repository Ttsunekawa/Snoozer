import { connect } from 'react-redux';
import { fetchInvite } from '../../actions/league_actions';

import Leagues from '../leagues/leagues'

const mapStateToProps = (state) => {
  let users = state.entities.users
  let session = state.session

  return ({
    currentUser: users[session.id],
  })
};

const mapDispatchToProps = dispatch => ({
  fetchInvite: url => dispatch(fetchInvite(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);