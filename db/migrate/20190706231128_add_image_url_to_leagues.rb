class AddImageUrlToLeagues < ActiveRecord::Migration[5.2]
  def change
    add_column :leagues, :image_url, :string
  end
end
