class Changeuseridcolumninleagues < ActiveRecord::Migration[5.2]
  def change
    remove_column :leagues, :user_id
  end
end
