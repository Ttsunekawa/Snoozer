import { connect } from 'react-redux';
import { fetchInvite } from '../../actions/league_actions';

import Leagues from '../leagues/leagues'

const mapStateToProps = (state, ownProps) => {
  let users = state.entities.users
  let session = state.session

  return ({
    currentUser: users[session.id],
    nextPath: ownProps.match.url
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchInvite: url => dispatch(fetchInvite(url))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);