class Api::InvitesController < ApplicationController


  def show
   invite = Invite.find_by(url: params[:id])
   league = League.find(invite.league_id)
   @user = current_user

    league.teams.each do |team|
      if team.user_id == nil
        team.user_id = current_user.id
        team.save
        break
      end
    end

    render "/api/leagues/index"
  end

  private

  def invite_parms
    params.require(:invite).permit(:url, :league_id)
  end

end
