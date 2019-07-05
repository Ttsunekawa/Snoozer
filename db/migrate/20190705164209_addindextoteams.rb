class Addindextoteams < ActiveRecord::Migration[5.2]
  def change
    add_index :teams, [:user_id, :league_id], unique: true

  end
end
