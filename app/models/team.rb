class Team < ApplicationRecord
  validates :name, :league_id, presence: true

  has_one :user_team

  has_many :players,
  through: :user_team,
  source: :player

  belongs_to :league, dependent: :destroy
  belongs_to :user, optional: true

end