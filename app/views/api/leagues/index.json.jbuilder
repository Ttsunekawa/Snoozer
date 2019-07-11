@leagues.each do |league|
  leagueTeams = []
  user_teams = []
  teamOwners = {}

  league.teams.each do |team|
    leagueTeams << team

    if team.user_id
      user_teams << team
      teamOwners[team.user_id] = team.user.username
    end
  end


  json.set! league.id do
    json.extract! league, :id, :name
    json.teams leagueTeams
    json.commissionerId league.commissioner.id
    json.amount_of_teams league.amount_of_teams
    json.user_teams user_teams.length
    json.owners teamOwners
    json.image_url league.image_url
    json.leagueType league.leagueType
    json.scoringType league.scoringType
    json.invite_link league.invite
  end
end