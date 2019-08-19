class Team < ApplicationRecord
  validates :name, :league_id, presence: true

  has_one :user_teams

  has_many :players,
  through: :user_teams,
  source: :player

  belongs_to :league, dependent: :destroy
  belongs_to :user, optional: true

end