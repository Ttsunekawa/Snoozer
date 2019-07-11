import * as LeagueAPIUtil from '../util/league_api_util';

export const RECEIVE_LEAGUE = "RECEIVE_LEAGUE";
export const DELETE_LEAGUE = "DELETE_LEAGUE";
export const RECEIVE_LEAGUES = "RECEIVE_LEAGUES";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_LEAGUE_ERRORS = "RECEIVE_LEAGUE_ERRORS";
export const RECEIVE_INVITE = "RECEIVE_INVITE";

export const receiveLeague = league => ({
  type: RECEIVE_LEAGUE,
  league
})

export const removeLeague = leagueId => ({
  type: DELETE_LEAGUE,
  leagueId
})

export const receiveLeagues = leagues => ({
  type: RECEIVE_LEAGUES,
  leagues
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveInvite = invite => ({
  type: RECEIVE_INVITE,
  invite
})

export const createLeague = league => dispatch => (
  LeagueAPIUtil.createLeague(league).then(league => (
    dispatch(receiveLeague(league))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteLeague = id => dispatch => (
  LeagueAPIUtil.deleteLeague(id).then(leagueId => (
    dispatch(removeLeague(leagueId))
  ))
)

export const fetchLeagues = () => dispatch => (
  LeagueAPIUtil.fetchLeagues().then(leagues => (
    dispatch(receiveLeagues(leagues))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchInvite = url => dispatch => (
  LeagueAPIUtil.fetchInvite(url).then(payload => (
    dispatch(receiveLeagues(payload))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);