

json.free_agents do
    @free_agents.each do |player| 
    json.set! player.id do
      json.extract! player, :id, :first_name, :last_name, :position, :team
    end
  end
end

json.teams_players do
  @user_teams.each do |user_team|
    if user_team.team_id
      json.set! user_team.team_id do
        user_teams = UserTeam.where(team_id: user_team.team_id)
        team = Team.find(user_team.team_id)
        team.players.each do |player|
          json.set! player.id do
            json.extract! player, :id, :first_name, :last_name, :position, :team
          end
        end
      end
    end
  end
end