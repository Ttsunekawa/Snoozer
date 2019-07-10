class Team < ApplicationRecord
  validates :name, :league_id, presence: true

  belongs_to :league, dependent: :destroy
  belongs_to :user, optional: true
  # has_many :players

end