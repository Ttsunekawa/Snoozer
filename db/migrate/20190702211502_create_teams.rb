class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.integer :league_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :teams, :league_id
    add_index :teams, :user_id
  end
end
