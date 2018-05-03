class Api::CustomersController < ApplicationController
    def index
        @customers = Customer.all
        @customers = Customer.filter_by_name(@customers, params['customer']) if params['customer']
        @customers = Customer.filter_by_company(@customers, params['company']) if params['company']
        @customers = Customer.sort_by(@customers, params['filter']) if params['filter']
        @customers = @customers.take(50)
        render 'index.json.jbuilder'
    end
end
