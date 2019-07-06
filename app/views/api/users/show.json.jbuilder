# user_team_ids = []

# @user.teams.each do |team|
#   user_team_ids << team.id
# end

league_ids = []

@user.leagues.each do |league|
  leagueTeams = []

  league_ids << league.id

  league.teams.each do |team|
    leagueTeams << team
  end

  user_leagues = "user_leagues"

  json.set! user_leagues do
    json.set! league.id do
      json.extract! league, :id, :name
      json.teams leagueTeams
      json.commissionerId league.commissioner.id
    end
  end
end

currentUser = "currentUser"

json.set! currentUser do
  json.extract! @user, :id, :email, :username
  json.leagueIds league_ids
  # json.teamIds user_team_ids
end

