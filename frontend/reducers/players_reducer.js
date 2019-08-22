import { RECEIVE_PLAYERS, RECEIVE_PLAYER, REMOVE_PLAYER } from '../actions/player_actions';

const playersReducer = (state = {}, action => {
  let nextState = Object.assign({}, state);
  debugger
  switch (action.type) {
    case RECEIVE_PLAYERS:
      
    case RECEIVE_PLAYER:

    case REMOVE_PLAYER:

    default:
      return state;
  }
})