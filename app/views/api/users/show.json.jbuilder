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
      json.amount_of_teams leagueTeams.length
      json.image_url league.image_url
      json.leagueType league.leagueType
      json.scoringType league.scoringType
      json.invite_link league.invite
    end
  end
end

currentUser = "currentUser"

json.set! currentUser do
  json.extract! @user, :id, :email, :username
  json.leagueIds league_ids
  # json.teamIds user_team_ids
end

