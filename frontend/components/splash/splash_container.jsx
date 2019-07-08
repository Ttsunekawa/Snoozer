import { connect } from 'react-redux';
import { fetchLeagues } from '../../actions/league_actions';
import Splash from './splash';


const mapDispatchToProps = dispatch => ({
  fetchLeagues: () => dispatch(fetchLeagues())
});

export default connect(null, mapDispatchToProps)(Splash);