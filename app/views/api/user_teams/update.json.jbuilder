@free_agents.each do |fa| 
  json.set! fa.id do
    json.extract! fa, :first_name, :last_name, :position, :team
  end
end