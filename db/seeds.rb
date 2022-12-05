puts "🌱 Seeding..."

    
    10.times{ ProjectManager.create(name: Faker::Name.unique.name, email: Faker::Internet.unique.email(domain: 'solutech.com')), profile_pic: faker.image.avatar(): string }

10.times{ Developer.create!( name: Faker::Name.unique.name, email: Faker::Internet.unique.email(domain: 'solutech.com'), profile_pic: faker.image.avatar(): string / Faker::LoremFlickr.unique.image)}

# Add developer job/department(optional).

30.times{
    Project.create!(
        title: Faker::Game.unique.title, 
        description:  Faker::Lorem.unique.paragraph(sentence_count: rand(4..8)),
        deadline: Faker::Date.unique.between(from: '2023-01-01', to: '2023-05-01'),
        progress: "Not started",
        project_manager_id: rand(1..10),
        developer_id: rand(1..10)
    )
}


puts "✅ Done seeding!"