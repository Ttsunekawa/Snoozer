team_ids = []
@league.teams.each do |team|
  team_ids << team.id
end

commissioner = "commissioner"

json.extract! @league, :id, :name
json.teams team_ids
json.commissionerId @league.commissioner.id

