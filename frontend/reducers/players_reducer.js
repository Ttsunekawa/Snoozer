import { RECEIVE_PLAYERS, RECEIVE_PLAYER, REMOVE_PLAYER } from '../actions/player_actions';

const playersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PLAYERS:
      debugger
      return action.players
    case RECEIVE_PLAYER:
      nextState[action.player] = 
    case REMOVE_PLAYER:

    default:
      return state;
  }
}

export default playersReducer;