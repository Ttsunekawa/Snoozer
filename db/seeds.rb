# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Team.delete_all
League.delete_all

user1 = User.create ({username: "JimmyG", email: "jimmyg@49ers.com", password: "password123123"})

league1 = League.create({ name: "Dynasty Drafters", amount_of_teams: 14, user_id: user1.id })