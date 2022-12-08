puts "🌱 Seeding..."

    
10.times{ ProjectManager.create(
    username: Faker::Name.unique.name, 
    email: Faker::Internet.unique.email(domain: 'renegades.com'), 
    profile_pic: Faker::Avatar.unique.image,
    password: 'ProjectManagerx'
    )
}

10.times{ Developer.create!( 
    username: Faker::Name.unique.name, 
    email: Faker::Internet.unique.email(domain: 'renegades.com'), 
    profile_pic: Faker::Avatar.unique.image,
    password: 'DeveloperX'
    )
}

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