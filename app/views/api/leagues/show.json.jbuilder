leagueTeams = []
@league.teams.each do |team|
  leagueTeams << team
end

commissioner = "commissioner"



json.extract! @league, :id, :name
json.teams leagueTeams
json.commissionerId @league.commissioner.id
json.amount_of_teams leagueTeams.length
json.image_url @league.image_url
json.leagueType @league.leagueType
json.scoringType @league.scoringType
json.invite_link @league.invite

  
