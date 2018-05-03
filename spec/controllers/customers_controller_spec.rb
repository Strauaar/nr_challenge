require 'rails_helper'

RSpec.describe Api::CustomersController do
    FactoryBot.define do
        factory :customer
    end
    describe "GET index" do
      it "assigns @customers" do
        customer = FactoryBot.create(:customer, first_name: "fname", last_name: "lname")
        get :index
        expect(assigns(:customers)).to eq([customer])
      end
  
      it "renders the index template" do
        get :index
        expect(response).to render_template("index.json.jbuilder")
      end
    end

    describe "behaviour with params specified" do
        subject { described_class.new } 
        context "when filter is not part of the query" do 
            it "does not call the sort_by method" do
                expect(Customer).to_not receive(:sort_by)
                get :index, params: {customer: 'as'}
            end
        end

        context "when company is not part of the query" do 
            it "does not call the filter_by_company method" do
                expect(Customer).to_not receive(:filter_by_company)
                get :index, params: {customer: 'as', filter: 'company, asc'}
            end
        end

        context "when company is not part of the query" do 
            it "does not call the filter_by_name method" do
                expect(Customer).to_not receive(:filter_by_name)
                get :index, params: {filter: 'company, asc'}
            end
        end
    end
end