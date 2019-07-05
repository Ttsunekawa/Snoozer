class League < ApplicationRecord

has_many :teams

has_many :users,
  through: :teams,
  source: :users

has_one :commissioner,
  through: :teams,
  source: :commissioner

r