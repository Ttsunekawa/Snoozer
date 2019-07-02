class CreateUsersTeam < ActiveRecord::Migration[5.2]
  def change
    create_table :users_teams do |t|
      t.integer :player_id, null: false
      t.integer :team_id, null: false

      t.timestamps
    end
    add_index :users_teams, [:player_id, :team_id], unique: true
  end
end
