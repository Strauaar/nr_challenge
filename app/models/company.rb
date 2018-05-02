class Company < ApplicationRecord
    validates :name, presence: true

    has_many :company_customer
    has_many :customers,
        through: :company_customer,
        source: :customer

end
