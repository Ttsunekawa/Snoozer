class AddImageUrlToTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :image_url, :string
  end
end
