class League < ApplicationRecord
  validates :name, :amount_of_teams, :user_id, :leagueType, :scoringType, presence: true

has_many :teams, dependent: :destroy
has_many :users,
  through: :teams,
  source: :user

belongs_to :commissioner,
foreign_key: :user_id,
class_name: :User



end