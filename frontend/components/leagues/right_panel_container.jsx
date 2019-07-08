import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { deleteLeague, createLeague } from '../../actions/league_actions';
import RightPanel from './right_panel';

const mapStateToProps = (state, ownProps) => ({
  league: state.entities.leagues
});

const mapDispatchToProps = dispatch => ({
  deleteLeague: id => dispatch(deleteLeague(id)),
  createLeague: league => dispatch(createLeague(league)),

});

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);