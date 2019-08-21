export const addPlayer = (leagueId, playerId ) => (
  $.ajax({
    method: "post",
    data: { playerId },
    url: `/api/leagues/${leagueId}/user_teams/add`
  })
)

export const removePlayer = (leagueId, playerId ) => (
  $.ajax({
    method: "delete",
    data: { playerId },
    url: `/api/leagues/${leagueId}/user_teams/remove`
  })
)
