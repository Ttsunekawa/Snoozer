class AddPlayersArraytoTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :player_ids, 
  end
end
