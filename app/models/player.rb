class Player < ApplicationRecord
  validates :first_name, :last_name, presence: true

  has_many :user_teams
  has_many :teams,
  through: :user_teams,
  source: :teams

end