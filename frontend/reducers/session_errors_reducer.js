import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';
import { RECEIVE_LEAGUE_ERRORS } from '../actions/league_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_LEAGUE_ERRORS:
      return [action.errors];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}


export default sessionErrorsReducer;