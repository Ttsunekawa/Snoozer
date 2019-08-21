class UserTeam < ApplicationRecord
  belongs_to :team, optional: true
  belongs_to :player
  belongs_to :league
end