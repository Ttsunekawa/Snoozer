class Removetable < ActiveRecord::Migration[5.2]
  def change
    drop_table :api_invites
  end
end
