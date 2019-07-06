class AddUserIdToLeague < ActiveRecord::Migration[5.2]
  def change
    add_column :leagues, :user_id, :string, null: false
    add_index :leagues, :user_id
  end
end
