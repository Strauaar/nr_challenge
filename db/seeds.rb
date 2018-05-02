# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

company_ids = []
20.times do 
    company = Company.create({ name: Faker::Company.name })
    company_ids << company.id
end

customer_ids = []
400.times do
    customer = Customer.create({ first_name: Faker::Name.first_name, last_name: Faker::Name.last_name })
    customer_ids << customer.id
end

400.times do 
    CompanyCustomer.create({ company_id: company_ids.sample, customer_id: customer_ids.sample })
end

