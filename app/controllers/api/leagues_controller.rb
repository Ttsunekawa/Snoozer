class Api::LeaguesController < ApplicationController

  before_action :require_logged_in

  def create
    @league = League.new(league_params)
    @user = current_user
    @league.user_id = params[:league][:user_id]
    if @league.save
      commish_team = Team.new(
        name: "Team 1",
        league_id: @league.id,
        user_id: @league.user_id
        )
      commish_team.save

      x = params[:league][:amount_of_teams]
      x = x.to_i
      x -= 1
      i = 2

      x.times do 
        Team.create(
          name: "Team #{i}",
          league_id: @league.id
          )
        i += 1
        end

      render "/api/users/show"
    else
      render json: @league.errors.full_messages, status: 422
    end

  end

  def show
    @league = current_user.leagues.find(params[:id])
    @user = current_user
    render "/api/users/show"
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
    params.require(:league).permit(:user_id, :name, :amount_of_teams)
  end
end
