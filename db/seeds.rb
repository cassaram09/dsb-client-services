# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


dsb = Company.create(name: 'DarkSquareBishop')
aar = Company.create(name: 'AspenAssociatesRealty')

User.create(email: 'matt@darksquarebishop.com', password: 'hello123').companies.push(dsb)
User.create(email: 'client@client.com', password: 'hello123').companies.push(aar)