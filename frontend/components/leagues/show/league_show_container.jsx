import { connect } from 'react-redux';
import LeagueShow from './league_nav';

const mapStateToProps = (state, ownProps) => {
  let league = state.entities.leagues[ownProps.match.params.leagueId]
  return ({
    league: league,
    leagueName: league.name,
    image_url: league.image_url,
    invite: league.invite_link.url,
    leagueType: league.leagueType,
    scoringType: league.scoringType,
    // teams: league.teams
  })
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, null)(LeagueShow);