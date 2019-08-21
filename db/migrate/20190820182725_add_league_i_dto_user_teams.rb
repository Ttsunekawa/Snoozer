class AddLeagueIDtoUserTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :users_teams, :league_id, :integer
  end
end
