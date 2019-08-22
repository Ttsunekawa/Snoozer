class Api::UserTeamsController < ApplicationController

  def index
    @league = current_user.leagues.find(params[:league_id])
    userteams = UserTeam.where(team_id: nil, league_id: @league.id)
    @free_agents = []
    ids = []
    debugger

    userteams.each { |user_team| ids << user_team.player_id }
    ids.each do |id|
      player = Player.find(id)
      @free_agents << player
    end

    render '/api/user_teams/index'
  end

  def update
    @league = current_user.leagues.find(params[:league_id])
    user_team = UserTeam.find_by(player_id: params[:playerId], league_id: @league.id)
    @user = current_user
    team = Team.find_by(user_id: @user.id)
    
    debugger  
    user_team.team_id = team.id
  

    if user_team.save
      debugger
      userteams = UserTeam.where(league_id: @league.id)
      @free_agents = []
      ids = []

      userteams.each { |user_team| ids << user_team.player_id}
      ids.each do |id|
        player = Player.find(id)
        @free_agents << player
      end

      render '/api/user_teams/update'
    end

  end

  def destroy
    debugger
    @league = current_user.leagues.find(params[:league_id])
    user_team = UserTeam.find_by(player_id: params[:playerId], league_id: @league.id)
    userteams = UserTeam.where(team_id: nil, league_id: @league.id)
    user = current_user
    user_team.team_id = nil
    @free_agents = []
    ids = []

      userteams.each { |user_team| ids << user_team.player_id}
      ids.each do |id|
        player = Player.find(id)
        @free_agents << player
      end

    if user_team.save
      render '/api/leagues/show'
    else
      render json: ["Access Denied"], status: 401
    end
  end


end

