export const addPlayer = (leagueId, playerId ) => (
  $.ajax({
    method: "patch",
    data: { playerId },
    url: `/api/leagues/${leagueId}/user_teams/add`
  })
)

export const deletePlayer = (leagueId, playerId ) => (
  $.ajax({
    method: "delete",
    data: { playerId },
    url: `/api/leagues/${leagueId}/user_teams/remove`
  })
)

export const fetchPlayers = (leagueId) => (
  $.ajax ({
    method: "get",
    url: `api/leagues/${leagueId}/user_teams/`
  })
)

export const fetchOwnPlayers = (leagueId) => (
  $.ajax ({
    method: "get",
    data: { teamId },    
    url: `api/leagues/${leagueId}/own_team`
  })
)
