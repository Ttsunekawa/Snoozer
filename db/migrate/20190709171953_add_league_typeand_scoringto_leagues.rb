class AddLeagueTypeandScoringtoLeagues < ActiveRecord::Migration[5.2]
  def change
    add_column :leagues, :leagueType, :string, null: false
    add_column :leagues, :scoringType, :string, null: false
  end
end
