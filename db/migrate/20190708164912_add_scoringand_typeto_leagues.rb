class AddScoringandTypetoLeagues < ActiveRecord::Migration[5.2]
  def change
    add_column :leagues, :scoring, :string, null: false
    add_column :leagues, :type, :string, null: false
  end
end
