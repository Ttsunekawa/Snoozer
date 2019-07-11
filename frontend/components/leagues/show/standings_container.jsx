import { connect } from 'react-redux';
import Standings from './standings'
const mapStateToProps = (state, ownProps) => {
  let league = state.entities.leagues[ownProps.match.params.leagueId]
  return ({
    league: league,
    leagueName: league.name,
    image_url: league.image_url,
    invite: league.invite_link.url,
    leagueType: league.leagueType,
    scoringType: league.scoringType,
    user_teams: league.user_teams,
    teams: league.teams
  })
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, null)(Standings);