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
  UserTeam.destroy_all
  Player.destroy_all

  player1 = Player.create({first_name: "Matt", last_name: "Ryan", team: "ATL",position: "QB"})
  player2 = Player.create({first_name: "Saquon", last_name: "Barkley", team: "NYG",position: "RB"})
  player3 = Player.create({first_name: "Tevin", last_name: "Coleman", team: "SF",position: "RB"})
  player4 = Player.create({first_name: "Rashaad", last_name: "Penny", team: "SEA",position: "RB"})
  player5 = Player.create({first_name: "Mike", last_name: "Evans", team: "TB",position: "WR"})
  player6 = Player.create({first_name: "Curtis", last_name: "Samuel", team: "CAR",position: "WR"})
  player7 = Player.create({first_name: "Todd", last_name: "Gurley", team: "LAR",position: "RB"})
  player8 = Player.create({first_name: "LeVeon", last_name: "Bell", team: "NYJ",position: "RB"})
  player9 = Player.create({first_name: "Brandin", last_name: "Cooks", team: "LAR",position: "WR"})
  player10 = Player.create({first_name: "Christian", last_name: "McCaffrey", team: "CAR",position: "RB"})
  player11 = Player.create({first_name: "Carson", last_name: "Wentz", team: "PHI",position: "QB"})
  player12 = Player.create({first_name: "Mark", last_name: "Ingram", team: "BAL",position: "RB"})
  player13 = Player.create({first_name: "Josh", last_name: "Jacobs", team: "OAK",position: "RB"})
  player14 = Player.create({first_name: "Jameis", last_name: "Winston", team: "TB",position: "QB"})
  player15 = Player.create({first_name: "Corey", last_name: "Davis", team: "TEN",position: "WR"})
  player16 = Player.create({first_name: "Keenan", last_name: "Allen", team: "LAC",position: "WR"})
  player17 = Player.create({first_name: "Cooper", last_name: "Kupp", team: "LAR",position: "WR"})
  player18 = Player.create({first_name: "George", last_name: "Kittle", team: "SF",position: "TE"})
  player19 = Player.create({first_name: "Kerryon", last_name: "Johnson", team: "DET",position: "RB"})
  player20 = Player.create({first_name: "DJ", last_name: "Moore", team: "CAR",position: "WR"})
  player21 = Player.create({first_name: "Tyreek", last_name: "Hill", team: "KC",position: "WR"})
  player22 = Player.create({first_name: "Matthew", last_name: "Stafford", team: "DET",position: "QB"})
  player23 = Player.create({first_name: "Evan", last_name: "Engram", team: "NYG",position: "TE"})
  player24 = Player.create({first_name: "Cam", last_name: "Newton", team: "CAR",position: "QB"})
  player25 = Player.create({first_name: "Kirk", last_name: "Cousins", team: "MIN",position: "QB"})
  player26 = Player.create({first_name: "Leonard", last_name: "Fournette", team: "JAC",position: "RB"})
  player27 = Player.create({first_name: "David", last_name: "Johnson", team: "ARI",position: "RB"})
  player28 = Player.create({first_name: "Jared", last_name: "Goff", team: "LAR",position: "QB"})
  player29 = Player.create({first_name: "Zach", last_name: "Ertz", team: "PHI",position: "TE"})
  player30 = Player.create({first_name: "Alvin", last_name: "Kamara", team: "NO",position: "RB"})

  user = User.create ({username: "Tyler Tsunekawa", email: "tylertsunekawa@gmail.com", password: "password123123"})
  user2 = User.create ({username: "Ryan", email: "ryan@gmail.com", password: "password123123"})

  league = League.create({
      name: "The Backside of Twin Peaks", 
      user_id: user.id, 
      amount_of_teams: 12, 
      image_url: "https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d", 
      leagueType: "Redraft", 
      scoringType: "PPR"}) 

  UserTeam.create(player_id: player1.id, league_id: league.id)
  UserTeam.create(player_id: player2.id, league_id: league.id)
  UserTeam.create(player_id: player3.id, league_id: league.id)
  UserTeam.create(player_id: player4.id, league_id: league.id)
  UserTeam.create(player_id: player5.id, league_id: league.id)
  UserTeam.create(player_id: player6.id, league_id: league.id)
  UserTeam.create(player_id: player7.id, league_id: league.id)
  UserTeam.create(player_id: player8.id, league_id: league.id)
  UserTeam.create(player_id: player9.id, league_id: league.id)
  UserTeam.create(player_id: player10.id, league_id: league.id)
  UserTeam.create(player_id: player11.id, league_id: league.id)
  UserTeam.create(player_id: player12.id, league_id: league.id)
  UserTeam.create(player_id: player13.id, league_id: league.id)
  UserTeam.create(player_id: player14.id, league_id: league.id)
  UserTeam.create(player_id: player15.id, league_id: league.id)
  UserTeam.create(player_id: player16.id, league_id: league.id)
  UserTeam.create(player_id: player17.id, league_id: league.id)
  UserTeam.create(player_id: player18.id, league_id: league.id)
  UserTeam.create(player_id: player19.id, league_id: league.id)
  UserTeam.create(player_id: player20.id, league_id: league.id)
  UserTeam.create(player_id: player21.id, league_id: league.id)
  UserTeam.create(player_id: player22.id, league_id: league.id)
  UserTeam.create(player_id: player23.id, league_id: league.id)
  UserTeam.create(player_id: player24.id, league_id: league.id)
  UserTeam.create(player_id: player25.id, league_id: league.id)
  UserTeam.create(player_id: player26.id, league_id: league.id)
  UserTeam.create(player_id: player27.id, league_id: league.id)
  UserTeam.create(player_id: player28.id, league_id: league.id)
  UserTeam.create(player_id: player29.id, league_id: league.id)
  UserTeam.create(player_id: player30.id, league_id: league.id)
 
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