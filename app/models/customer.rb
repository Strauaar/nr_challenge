class Customer < ApplicationRecord
    validates :first_name, :last_name, presence: true

    has_many :company_customer
    has_many :companies,
        through: :company_customer,
        source: :company
end
