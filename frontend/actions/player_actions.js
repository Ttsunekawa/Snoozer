import * as playerAPIUtil from '../util/player_api_util';
export const RECEIVE_PLAYERS = "RECEIVE_PLAYERS"
export const RECEIVE_PLAYER = "RECEIVE_PLAYER"
export const REMOVE_PLAYER = "REMOVE_PLAYER"

export const receivePlayers = players => ({
  type: RECEIVE_PLAYERS,
  players
})

export const receivePlayer = player => ({
  type: RECEIVE_PLAYER,
  player
})

export const removePlayer = player => ({
  type: REMOVE_PLAYER,
  player
})

export const fetchOwnPlayers = (teamId, leagueId) => dispatch => (
  playerAPIUtil.fetchOwnPlayers(teamId, leagueId).then(players => (
    dispatch(receiveOwnPlayers(players))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
  ))
);

export const addPlayer = (leagueId, playerId) => dispatch => (
  playerAPIUtil.addPlayer(leagueId, playerId).then(players => (
    dispatch(receivePlayers(players))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deletePlayer = (leagueId, playerId) => dispatch => (
  playerAPIUtil.deletePlayer(leagueId, playerId).then(players => (
    dispatch(receivePlayers(players))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchPlayers = (leagueId) => dispatch => (
  playerAPIUtil.fetchPlayers(leagueId).then(players => (
    dispatch(receivePlayers(players))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);