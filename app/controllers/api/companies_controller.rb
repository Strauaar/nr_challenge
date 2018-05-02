class Api::CompaniesController < ApplicationController
    def index
        @companies = Company.all
    end
end
