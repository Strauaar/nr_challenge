class Api::CustomersController < ApplicationController
    def index
        @customers = Customer.all
        # TODO move methods to models
        if params['customer'] != ''
            customer = "#{params['customer'].downcase}%"
            @customers = @customers.where("lower(first_name) LIKE ? ", customer).or(@customers.where('lower(last_name) LIKE ?', customer))
        end
        if params['company'] != 'all'
            company_id = Company.find_by_name(params['company']).id
            @customers = @customers.where(company_id: company_id)
        end
        if params['filter'] != 'default' 
            type, order = params['filter'].split(',')
            if type == 'company'
                @customers = @customers.sort_by { |customer| customer.company }
                @customers = @customers.reverse if order == 'desc'
            else
                @customers = @customers.order("#{type} #{order}")
            end
        end
        @customers = @customers.take(50)
    end
end
