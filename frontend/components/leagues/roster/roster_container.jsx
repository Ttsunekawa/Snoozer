import { connect } from 'react-redux';
import LeagueStandings from './league_standings';

const mapStateToProps = (state, ownProps) => {
  let league = state.entities.leagues[ownProps.match.params.leagueId]
  let team;

  for (let i = 0; i < league.teams.length; i++) {
    // If team.user_id === current_user.id
    if (league.teams[i].user_id === state.entities.users[state.session.id]) { team = league.teams[i] }
  }
  return ({
    currentUser: state.entities.users[state.session.id],
    league: league,
    leagueName: league.name,
    image_url: league.image_url,
    leagueType: league.leagueType,
    scoringType: league.scoringType,
    owners: league.owners,
    teams: league.teams
  })
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, null)(LeagueStandings);