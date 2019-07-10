class AddInvitesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :invites do |t|
      t.string :url, null: false
      t.string :league_id, null: false

      t.timestamps
    end
  add_index :invites, :league_id, unique: true
  end
end


