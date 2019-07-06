class Removeindexforteams < ActiveRecord::Migration[5.2]
  def change
    remove_index :teams, :user_id
    remove_index :teams, [:user_id, :league_id]
  end
end
