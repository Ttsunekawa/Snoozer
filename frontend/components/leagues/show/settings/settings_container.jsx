import { connect } from 'react-redux';
import LeagueSettings from './league_settings';
import { deleteLeague } from '../../../../actions/league_actions';

const mapStateToProps = (state, ownProps) => {
  let league = state.entities.leagues[ownProps.match.params.leagueId]
  return ({
    league: league,
  })
};

const mapDispatchToProps = dispatch => ({
  deleteLeague: (leagueId) => dispatch(deleteLeague(leagueId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueSettings);