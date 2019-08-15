import { connect } from 'react-redux';
import LeagueStandings from './league_standings';

const mapStateToProps = (state, ownProps) => {
  let league = state.entities.leagues[ownProps.match.params.leagueId]
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