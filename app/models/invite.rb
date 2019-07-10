class Invite < ApplicationRecord

validates :url, :league_id, presence: true, uniqueness: true

belongs_to :league, dependent: :destroy

end