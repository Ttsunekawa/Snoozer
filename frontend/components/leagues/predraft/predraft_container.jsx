import { connect } from 'react-redux';
import Predraft from './predraft';

const mapStateToProps = (state, ownProps) => {
  if (state.entities.leagues[ownProps.match.params.leagueId]){
    let league = state.entities.leagues[ownProps.match.params.leagueId]
    return ({
      invite: league.invite_link.url,
      teams: league.teams,
      name: league.name,
      image_url: league.image_url,
      leagueType: league.leagueType,
      scoringType: league.scoringType,
      id: league.id,
      owners: league.owners,
      currentUser: state.entities.users[state.session.id]
    })
  } else { return null }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, null)(Predraft);;