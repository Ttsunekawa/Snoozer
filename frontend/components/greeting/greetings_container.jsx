import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Greeting from './greeting';

const mapStateToProps = (state) => {
  let users = state.entities.users
  let session = state.session

  return ({
    currentUser: users[session.id]
  })
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);