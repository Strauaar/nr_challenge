# Goal

Create a full stack application that allows you to filter a list of customers in three ways:

  1. Filter by a customer's name via text input field

  2. Filter by a customer's company name via select dropdown

  3. Sort by a customer's first name, last name, or company name with both ascending and descending order

# Setup

    git clone https://github.com/Strauaar/nr_challenge.git
    cd nr_challenge
    bundle install
    yarn install
    rails db:create && rails db:migrate && rails db:seed
    rails s

Navigate to localhost:3000 to test out the application!

# Testing

## Backend

- rspec-rails(3.7.2) 
- factory_bot(4.8.2)

To run:

    bundle exec rspec

Test files can be found in the [spec](https://github.com/Strauaar/nr_challenge/tree/master/spec) folder

## Frontend 

- jest(22.4.3)
- axios-mock-adapter(1.15.0)
- sinon(5.0.3)

To run: 

    yarn test

Test files can be found in the [app/javascript/packs/challenge_tests/components](https://github.com/Strauaar/nr_challenge/tree/master/app/javascript/packs/challenge_tests/components) folder

Config:

    //package.json
    "jest": {
        "setupTestFrameworkScriptFile": "./node_modules/jest-enzyme/lib/index.js",
        "roots": [
            "app/javascript/packs"
        ]
    }

# Code

## Backend 

Main functionality:

- Controllers: 
    - [customers_controller.rb](https://github.com/Strauaar/nr_challenge/blob/master/app/controllers/api/customers_controller.rb)
    - [companies_controller.rb](https://github.com/Strauaar/nr_challenge/blob/master/app/controllers/api/companies_controller.rb)

- Models:
    - [customer.rb](https://github.com/Strauaar/nr_challenge/blob/master/app/models/customer.rb)
    - [company.rb](https://github.com/Strauaar/nr_challenge/blob/master/app/models/company.rb)

## Frontend 

Main functionality: 

- [Components](https://github.com/Strauaar/nr_challenge/blob/master/app/javascript/packs/challenge/components)