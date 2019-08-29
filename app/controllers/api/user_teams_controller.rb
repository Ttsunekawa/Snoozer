class Api::UserTeamsController < ApplicationController

  def index
    @league = current_user.leagues.find(params[:league_id])
    @user_teams = UserTeam.where(league_id: @league.id)
    @all_players = UserTeam.where(team_id: nil, league_id: @league.id)
    @players = {}
    @free_agents = []
    player_ids = []
    free_agent_ids = []

    @user_teams.each { |user_team| player_ids << user_team.player_id }
    @all_players.each { |free_agent| free_agent_ids << free_agent.player_id }

    player_ids.each do |id|
      player = Player.find(id)
      @players[id] = player
    end

    free_agent_ids.each do |id|
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
    
    user_team.team_id = team.id
  

    if user_team.save
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

  def teams_players
    @league = current_user.leagues.find(params[:league_id])
    @user = current_user
    team = Team.find_by(user_id: @user.id)
    @players = team.players

    render 'api/user_teams/own_players'
  end

  def destroy
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

