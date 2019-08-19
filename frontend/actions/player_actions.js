import * as playerAPIUtil from '../util/player_api_util';

export const fetchPlayers = () => dispatch => (
  playerAPIUtil.fetchPlayers().then(leagues => (
    dispatch(receiveLeagues(leagues))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);