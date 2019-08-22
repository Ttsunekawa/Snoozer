class Api::LeaguesController < ApplicationController

  def index
    @leagues = current_user.leagues
    render "api/leagues/index"
  end

  def create
    @league = League.new(league_params)
    @user = current_user
    @league.user_id = params[:league][:user_id]
    @free_agents = Player.all
    if @league.save

      invite_link = SecureRandom.urlsafe_base64
      Invite.create({url: invite_link, league_id: @league.id })

      @free_agents.each do |player|
        UserTeam.create(
          player_id: player.id,
          league_id: @league.id
        )
      end

        commish_team = Team.new(
          name: "Team 1",
          league_id: @league.id,
          user_id: @league.user_id
          )
        commish_team.save

      x = params[:league][:amount_of_teams].to_i
      x -= 1
      i = 2

      x.times do 
        team = Team.create(
          name: "Team #{i}",
          league_id: @league.id
          )
        i += 1
      end


      render "/api/leagues/show"
    else
      render json: @league.errors.full_messages, status: 422
    end

  end

  def show
    @league = current_user.leagues.find(params[:id])
    @user = current_user
    @free_agents = UserTeam.where(team_id: nil)
    render "/api/leagues/show"
  end

  def update
    @league = current_user.leagues.find(params[:id])
    if @league.update_attributes(league_params)
      render "api/leagues/show"
    else
      render json: @league.errors.full_messages, status: 422
    end

  end
  
  def destroy
    @user = current_user
    @league = current_user.leagues.find(params[:id])
    @league.destroy
    render "api/leagues/show"
  end

  private

  def league_params
    params.require(:league).permit(:user_id, :name, :amount_of_teams, :image_url, :leagueType, :scoringType)
  end
end
