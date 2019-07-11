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

  user = User.create ({username: "Jimmy Garoppolo", email: "jimmyg@49ers.com", password: "password123123"})

  # (1..80).each do |i|
  #   user = user"#{i}" 
  #   temp = user
  #   temp = User.create ({
  #     username: Faker::Movies::LordOfTheRings.character,
  #     email: Faker::Movies::LordOfTheRings.character.email,
  #     password: "password" })
  # end

  league = League.create({
    name: "The Rebellion", 
    user_id: user.id, 
    amount_of_teams: 12, 
    image_url: "https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d", 
    leagueType: "Redraft", 
    scoringType: "PPR"})

  invite = Invite.create({
    url: "H_I_R_E_M_E",
    league_id: league.id
  })

  league.amount_of_teams.times do |i|
    if i != 0
    user = User.create ({
      username: Faker::Name.name,
      email: Faker::Internet.email,
      password: "password" })
    end

    team = Team.create ({
      name: Faker::Movies::StarWars.call_sign,
      league_id: league.id,
      user_id: user.id,
      image_url: "https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d"
    })

    if i == league.amount_of_teams - 2
      Team.create({name: "Empty Team",
      league_id: league.id,
      image_url: "https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d"
    })
      break
    end
  end

end