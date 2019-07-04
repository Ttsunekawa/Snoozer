class Api::UsersController < ApplicationController
  def create
    @user = User.new(users_params)

    if @user.save
      login(@user)
      render json: @user
      # render "api/users/show"
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  private

  def users_params
    params.require(:user).permit(:email, :username, :password)
  end
end
