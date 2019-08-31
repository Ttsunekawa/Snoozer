import { connect } from 'react-redux';
import Team from './team';
import { fetchPlayers } from '../../../../actions/player_actions';

const mapStateToProps = (state, ownProps) => {
  let league = state.entities.leagues[ownProps.match.params.leagueId]
  let currentUser = state.entities.users[state.session.id]
  let team;
  let players = Object.values(state.players)

  for (let i = 0; i < league.teams.length; i++) {
    if (parseInt(league.teams[i].user_id) === currentUser.id) {
      team = league.teams[i]
    }
  }
  
  return ({
    league: league,
    currentUser: currentUser,
    team: team,
    players: players,
    roster: ["QB","RB","RB","WR","WR","TE","FLEX"]
  })
};

const mapDispatchToProps = dispatch => ({
  fetchPlayers: leagueId => dispatch(fetchPlayers(leagueId)),
  // fetchOwnPlayers: 
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);