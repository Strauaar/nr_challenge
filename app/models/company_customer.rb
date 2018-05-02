class CompanyCustomer < ApplicationRecord
    validates :company_id, :customer_id, presence: true
    
    belongs_to :company
    belongs_to :customer
end
