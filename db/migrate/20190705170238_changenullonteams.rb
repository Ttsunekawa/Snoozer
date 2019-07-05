class Changenullonteams < ActiveRecord::Migration[5.2]
  def change
    change_column :teams, :user_id, :string, null: true
  end
end
