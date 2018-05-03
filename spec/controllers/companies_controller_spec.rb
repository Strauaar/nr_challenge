require 'rails_helper'

RSpec.describe Api::CompaniesController do
    FactoryBot.define do
        factory :company
    end
    describe "GET index" do
      it "assigns @companies" do
        company1 = FactoryBot.create(:company, name: "company1")
        company2 = FactoryBot.create(:company, name: "company2")
        company3 = FactoryBot.create(:company, name: "company3")
        get :index
        expect(assigns(:companies)).to eq([company1, company2, company3])
      end
  
      it "renders the index template" do
        get :index
        expect(response).to render_template("index.json.jbuilder")
      end
    end
end