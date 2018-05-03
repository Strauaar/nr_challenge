require 'rails_helper'

RSpec.describe Api::CustomersController do
    describe "GET index" do
      it "assigns @customers" do
        customer = Customer.create({first_name: "fname", last_name: "lname"})
        get :index
        expect(assigns(:customers)).to eq([customer])
      end
  
      it "renders the index template" do
        get :index
        expect(response).to render_template("index.json.jbuilder")
      end
    end
  end