class Api::UserTeamsController < ApplicationController

  def update
    @league = current_user.leagues.find(params[:league_id])
    user_team = UserTeam.find_by(player_id: params[:player][:id], league_id: @league.id)
    @user = current_user
    team = Team.find_by(user_id: @user.id)
    
    debugger  
    user_team.team_id = team.id
  

    if user_team.save
      debugger
      @free_agents = UserTeam.where(team_id: nil)
      render '/api/leagues/show'
    end

  end

  def destroy
    @league = current_user.leagues.find(params[:id])
    user_team = UserTeam.find_by(player_id: params[:player][:id], league_id: @league.id)
    user = current_user
    user_team.team_id = nil
    @players = Player.find_by(league_id: @league.id, team_id: nil)
    user_team.save
    render '/api/leagues/show'
  end


end

