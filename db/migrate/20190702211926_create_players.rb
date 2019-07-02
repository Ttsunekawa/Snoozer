class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :age
      t.integer :height
      t.integer :weight
      t.string :photo_url
      t.string :position
      t.string :team
      t.integer :experience
      t.integer :rushing_attempts
      t.integer :rushing_yards
      t.float :rushing_average
      t.integer :rushing_long
      t.integer :rushing_touchdowns
      t.integer :targets
      t.integer :receiving_yards
      t.float :receiving_average
      t.integer :receiving_long
      t.integer :receiving_touchdowns

      t.timestamps
    end
  end
end
