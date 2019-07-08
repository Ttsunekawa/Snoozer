import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER }from '../actions/session_actions';
import { RECEIVE_LEAGUE, DELETE_LEAGUE, RECEIVE_LEAGUES } from '../actions/league_actions';

const usersReducer = (state = {}, action) => {
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {[action.payload.currentUser.id]: action.payload.currentUser}
    case LOGOUT_CURRENT_USER:
      return {}
    case RECEIVE_LEAGUE:
      return {[action.payload.currentUser.id]: action.payload.currentUser }
    case RECEIVE_LEAGUES:
      return { [action.payload.currentUser.id]: action.payload.currentUser }
    case DELETE_LEAGUE:

    default:
      return state;
  }
};

export default usersReducer;