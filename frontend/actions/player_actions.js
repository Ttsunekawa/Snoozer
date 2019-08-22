import * as playerAPIUtil from '../util/player_api_util';

export const addPlayer = (leagueId, playerId) => dispatch => (
  playerAPIUtil.addPlayer(leagueId, playerId).then(players => (
    dispatch(receivePlayers(players))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deletePlayer = () => dispatch => (
  playerAPIUtil.deletePlayer().then(player => (
    dispatch(removePlayer(player))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchPlayers = () => dispatch => (
  playerAPIUtil.fetchPlayers().then(players => (
    dispatch(receivePlayers(players))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);