class Api::CustomersController < ApplicationController
    def index
        @customers = Customer.all
        if params['filter']
            filter = params['filter'].gsub(',', ' ')
            @customers = @customers.order(filter)
        end
        @customers = @customers.limit(50)
    end
end
