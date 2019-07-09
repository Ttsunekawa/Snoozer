import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LEAGUE, DELETE_LEAGUE, RECEIVE_LEAGUES } from '../actions/league_actions';

const _nullLeague = Object.freeze({
  id: null
});

const leaguesReducer = (state = _nullLeague, action) => {
  
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if(action.payload.user_leagues){
        return action.payload.user_leagues;
      } else {
        return state;
      }
    case LOGOUT_CURRENT_USER:
      return _nullLeague;
    case RECEIVE_LEAGUE:
      if (action.payload.user_leagues) {
        return action.payload.user_leagues;
      } else {
        return state;
      }
    case RECEIVE_LEAGUES:
      if (action.payload.user_leagues) {
        return action.payload.user_leagues;
      } else {
        return state;
      }
    case DELETE_LEAGUE:
      delete newState[action.leagueId] 
      return newState
    default:
      return state;
  }
};

export default leaguesReducer;
