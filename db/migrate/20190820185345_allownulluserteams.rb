class Allownulluserteams < ActiveRecord::Migration[5.2]
  def change
    change_column :users_teams, :team_id, :integer, :null => true
  end
end
