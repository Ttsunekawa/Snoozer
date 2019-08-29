@players.each do |player| 
  json.set! player.id do
    json.extract! player, :first_name, :last_name, :position, :team
  end
end