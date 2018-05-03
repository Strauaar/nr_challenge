class Company < ApplicationRecord
    validates :name, presence: true
    has_many :customers
end
