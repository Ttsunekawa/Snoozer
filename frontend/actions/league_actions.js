import * as LeagueAPIUtil from '../util/league_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_LEAGUE = "RECEIVE_LEAGUE";
export const DELETE_LEAGUE = "DELETE_LEAGUE";

export const receiveLeague = payload => ({
  type: RECEIVE_LEAGUE,
  payload
})

export const removeLeague = leagueId => ({
  type: DELETE_LEAGUE,
  leagueId
})

export const createLeague = league => dispatch => (
  LeagueAPIUtil.createLeague(league).then(league => (
    dispatch(receiveLeague(league))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteLeague = id => dispatch => (
  LeagueAPIUtil.deleteLeague(id).then(commissioner => (
    dispatch(removeLeague(commissioner))
  ))
)