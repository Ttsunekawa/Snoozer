import { connect } from 'react-redux';
import Team from './team';

const mapStateToProps = (state, ownProps) => {
  let league = state.entities.leagues[ownProps.match.params.leagueId]
  let currentUser = state.entities.users[state.session.id]
  let team;

  for (let i = 0; i < league.teams.length; i++) {
    if (parseInt(league.teams[i].user_id) === currentUser.id) {
      team = league.teams[i]
    }
  }
  debugger
  
  return ({
    currentUser: currentUser,
    team: team,
  })
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, null)(Team);