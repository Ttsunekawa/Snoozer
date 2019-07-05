class League < ApplicationRecord
  validates :name, presence: true

has_many :teams
has_many :users,
  through: :teams,
  source: :user

belongs_to :commissioner,
foreign_key: :user_id



end