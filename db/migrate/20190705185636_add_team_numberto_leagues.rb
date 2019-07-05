class AddTeamNumbertoLeagues < ActiveRecord::Migration[5.2]
  def change
    add_column :leagues, :amount_of_teams, :integer, null: false
  end
end
