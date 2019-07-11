import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LEAGUE, DELETE_LEAGUE, RECEIVE_LEAGUES } from '../actions/league_actions';

const _nullLeague = Object.freeze({
  id: null
});

const leaguesReducer = (state = _nullLeague, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state)
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return _nullLeague;
    case RECEIVE_LEAGUE:
      newState[action.league.id] = action.league;
      return newState;
    case RECEIVE_LEAGUES:
      return action.leagues;
    case DELETE_LEAGUE:
      delete newState[action.leagueId] 
      return newState
    default:
      return state;
  }
};

export default leaguesReducer;
