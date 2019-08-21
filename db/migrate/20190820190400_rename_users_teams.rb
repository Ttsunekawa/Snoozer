class RenameUsersTeams < ActiveRecord::Migration[5.2]
  def change
    rename_table :users_teams, :user_teams
  end
end
