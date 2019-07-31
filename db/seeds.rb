# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do

  User.destroy_all
  Team.destroy_all
  League.destroy_all
  Invite.destroy_all

  user = User.create ({username: "Tyler Tsunekawa", email: "tylertsunekawa@gmail.com", password: "password123123"})
  user2 = User.create ({username: "Ryan", email: "ryan@gmail.com", password: "password123123"})

  league = League.create({
    name: "The Backside of Twin Peaks", 
    user_id: user.id, 
    amount_of_teams: 12, 
    image_url: "https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d", 
    leagueType: "Redraft", 
    scoringType: "PPR"})

  team = Team.create({
    name: "San Francisco 49ers",
    league_id: league.id,
    user_id: user.id,
    image_url: "https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d"
  })

  team = Team.create({
    name: "Los Angeles Chargers",
    league_id: league.id,
    user_id: user2.id,
    image_url: "https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d"
  })

  invite = Invite.create({
    url: SecureRandom.urlsafe_base64,
    league_id: league.id
  })

  

  names = ["Walker", "Mike", "Julian", "Selam", "Kenny", "Michelle", "SeHwan", "Onur", "Dylan", "Ryan"]
  emails = ["walker@tubular.com", "mike@nutube.com", "julian@julian.com", "kenny@airbnb.com", "michelle@intents.com", "sehwan@sparkube.com", "onur@onur.com", "dylan@dylan.com", "ryan@help.com" ]
  errors = ["TypeError", "Error", "RangeError", "Error404", "SYNTAXERROR", "URIError", "Teacup error", "Standard Error", "Arugment Error", "somanyerrorsandIhavetohelp"]
  nfl_teams = ["Cleveland Browns", "New England Patriots", "Oakland Raiders", "Los Angeles Rams", "Miami Dolphins", "Cincinnati Bengals", "Kansas City Chiefs", "Dallas Cowboys", "Houston Texans"]

  (0..9).each do |i|
    if i == 9
      Team.create({name: "Team 12",
      league_id: league.id,
      image_url: "https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d"
    })
      break
    end
    
    user = User.create ({
      username: names[i],
      email: emails[i],
      password: "password" })

    team = Team.create ({
      name: nfl_teams[i],
      league_id: league.id,
      user_id: user.id,
      image_url: "https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d"
    })

    # if i == league.amount_of_teams - 2
    #   Team.create({name: "Empty Team, Ohhh nooooo we need one more person!",
    #   league_id: league.id,
    #   image_url: "https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d"
    # })
    #   break
    # end
  end

end