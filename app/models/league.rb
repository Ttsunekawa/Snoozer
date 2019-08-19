class League < ApplicationRecord
  validates :name, :amount_of_teams, :user_id, :leagueType, :scoringType, presence: true
  # validates :amount_of_teams, length: {maximum: number}

has_many :teams
has_many :players,
through: :teams,
source: :players

has_many :users,
  through: :teams,
  source: :user
  
has_one :invite

belongs_to :commissioner,
foreign_key: :user_id,
class_name: :User


end