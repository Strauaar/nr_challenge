class Customer < ApplicationRecord
    validates :first_name, :last_name, presence: true

    belongs_to :company

    def self.filter_by_name(collection, name)
        customer = "#{name.downcase}%"
        collection.where("lower(first_name) LIKE ? ", customer).or(collection.where('lower(last_name) LIKE ?', customer))
    end

    def self.filter_by_company(collection, company)
        company_id = Company.find_by_name(company).id
        collection.where(company_id: company_id)
    end

    def self.sort_by(collection, filter)
        type, order = filter.split(',')
        if type == 'company'
            newCollection = collection.sort_by { |customer| customer.company.name }
            return order == 'desc' ? newCollection.reverse : newCollection
        else
            return collection.order("#{type} #{order}")
        end
    end
end
