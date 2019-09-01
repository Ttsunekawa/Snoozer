import { connect } from 'react-redux';
import Team from './team';
import { fetchPlayers, addPlayer, deletePlayer } from '../../../../actions/player_actions';

const mapStateToProps = (state, ownProps) => {
  let league = state.entities.leagues[ownProps.match.params.leagueId]
  let currentUser = state.entities.users[state.session.id]
  let team;
  let own_players = {}
  let free_agents = {}
  
  for (let i = 0; i < league.teams.length; i++) {
    if (parseInt(league.teams[i].user_id) === currentUser.id) {
      team = league.teams[i]
    }
  }
  
  if(Object.keys(state.players).length !== 0) {
    if (state.players.teams_players[team.id] !== undefined){
      own_players = Object.values(state.players.teams_players[team.id])
    }
    if (Object.keys(state.players.free_agents).length !== 0) {
      free_agents = Object.values(state.players.free_agents)
    }
  }
  
  return ({
    league: league,
    currentUser: currentUser,
    team: team,
    roster: ["QB","RB","RB","WR","WR","TE","FLEX"],
    own_players: own_players,
    free_agents: free_agents
  })
};

const mapDispatchToProps = dispatch => ({
  fetchPlayers: leagueId => dispatch(fetchPlayers(leagueId)),
  removePlayer: (leagueId, playerId) => dispatch(deletePlayer(leagueId, playerId)),
  addPlayer: (leagueId, playerId) => dispatch(addPlayer(leagueId, playerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);