class LeaguesController < ApplicationController

  def create
    
  end

  def show

  end

  def update

  end
  
  def destroy

  end

  private

  def league_params
    params.require(:league).permit(:name)
  end
end
