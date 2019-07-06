class AddNullFalsetoLeagues2 < ActiveRecord::Migration[5.2]
  def change
    change_column_null :leagues, :user_id, false

  end
end
