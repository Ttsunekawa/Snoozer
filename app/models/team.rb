class Team < ApplicationRecord

  belongs_to :league
  belongs_to :user
  # has_many :players

end