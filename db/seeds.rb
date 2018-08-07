require 'csv'

Subregion.delete_all
Subindustry.delete_all
Region.delete_all
Industry.delete_all
User.delete_all

10.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name

    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
        password: "password"
    )
end

users = User.all

Industry.create([
    { id: 1, name: 'Motor Vehicle & Parts Dealer' },
    { id: 2, name: 'Furniture & Home Furnishings' },
    { id: 3, name: 'Electronics & Applicance Store'},
    { id: 4, name: 'Building Material & Garden Equipment Dealer'},
    { id: 5, name: 'Food & Beverage Store'},
    { id: 6, name: 'Health & Personal Care Store'},
    { id: 7, name: 'Gasoline Station'},
    { id: 8, name: 'Clothing & Accessories Store'},
    { id: 9, name: 'Sport, Hobby, Book & Music Store'},
    { id: 10, name: 'General Merchandise Store'},
    { id: 11, name: 'Other Retailer'}
])

Subindustry.create([
    { id: 1, industry_id: 1, name: 'Automobile Dealer'},
    { id: 2, industry_id: 1, name: 'Other Motor Vehicle Dealer'},
    { id: 3, industry_id: 1, name: 'Auto Parts & Accessories or Tire Store'},
    { id: 4, industry_id: 2, name: 'Furniture Store'},
    { id: 5, industry_id: 2, name: 'Home Furnishings Store'},
    { id: 6, industry_id: 5, name: 'Grocery Store'},
    { id: 7, industry_id: 5, name: 'Specialty Food Store'},
    { id: 8, industry_id: 5, name: 'Beer, Wine & Liquor Store'},
    { id: 9, industry_id: 8, name: 'Clothing Store'},
    { id: 10, industry_id: 8, name: 'Shoe Store'},
    { id: 11, industry_id: 8, name: 'Jewellery, Luggage or Leather Goods'},
    { id: 12, industry_id: 10, name: 'Department Store'},
    { id: 13, industry_id: 10, name: 'Other General Merchandise Store'}
])

Region.create([
    { id: 1, name: 'Alberta' },
    { id: 2, name: 'British Columbia' },
    { id: 3, name: 'Manitoba' },
    { id: 4, name: 'New Brunswick' },
    { id: 5, name: 'Newfoundland & Labrador' },
    { id: 6, name: 'Northwest Territories' },
    { id: 7, name: 'Nova Scotia' },
    { id: 8, name: 'Nunavut' },
    { id: 9, name: 'Ontario' },
    { id: 10, name: 'Prince Edward Island' },
    { id: 11, name: 'Quebec' },
    { id: 12, name: 'Saskatchewan' },
    { id: 13, name: 'Yukon' }
])

Subregion.create([
    { id: 1, region_id: 2, name: 'Vancouver' },
    { id: 2, region_id: 9, name: 'Toronto' },
    { id: 3, region_id: 11, name: 'Montreal' }
])

industries = Industry.all
subindustries = Subindustry.all
regions = Region.all
subregions = Subregion.all

puts Cowsay.say("Created #{users.count} users", :tux)
puts Cowsay.say("Created #{industries.count} industries & #{subindustries.count} subindustries", :cow)
puts Cowsay.say("Created #{regions.count} regions & #{subregions.count} subregions", :frogs)