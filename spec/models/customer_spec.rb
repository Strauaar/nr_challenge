require 'rails_helper'

RSpec.describe Customer do
    FactoryBot.define do
        factory :company
        factory :customer
    end
  it "is not valid without a first_name" do
    subject { described_class.new(last_name: 'lname', company_id: 1) }
    expect(subject).to_not be_valid
  end

  it "is not valid without a last_name" do
    subject { described_class.new(first_name: 'fname', company_id: 1) }
    expect(subject).to_not be_valid
  end

  it "has one company" do 
    assc = described_class.reflect_on_association(:company)
    expect(assc.macro).to eq :belongs_to
  end

  describe "filters via class methods" do
    before :each do
      @company1 = FactoryBot.create(:company, name: "company1")        
      @company2 = FactoryBot.create(:company, name: "company2")        
      @ac = FactoryBot.create(:customer, first_name: "a", last_name: "c", company_id: @company1.id)
      @bb = FactoryBot.create(:customer, first_name: "b", last_name: "b", company_id: @company2.id)
      @ca = FactoryBot.create(:customer, first_name: "c", last_name: "a", company_id: @company2.id)
    end

    context "if company is specified" do
      it "returns a sorted array of results that match" do
        expect(Customer.filter_by_company("company1")).to eq([@ac])        
      end
    end

    context "if customer is specified" do
        it "returns a sorted array of results that match" do
            expect(Customer.filter_by_name("a")).to eq([@ac, @ca])
        end
    end

    context "if filter is specified" do
        context "filter by first_name, ascending" do 
            it "returns a sorted array of results that match" do
                expect(Customer.sort_by("first_name,asc")).to eq([@ac, @bb, @ca])
            end
        end
        context "filter by first_name, descending" do 
            it "returns a sorted array of results that match" do
                expect(Customer.sort_by("first_name,desc")).to eq([@ca, @bb, @ac])
            end
        end
        context "filter by last_name, ascending" do 
            it "returns a sorted array of results that match" do
                expect(Customer.sort_by("last_name,asc")).to eq([@ca, @bb, @ac])
            end
        end
        context "filter by last_name, descending" do 
            it "returns a sorted array of results that match" do
                expect(Customer.sort_by("last_name,desc")).to eq([@ac, @bb, @ca])
            end
        end
        context "filter by company_name, ascending" do 
            it "returns a sorted array of results that match" do
                expect(Customer.sort_by("company,asc")).to eq([@ac, @bb, @ca])
            end
        end
        context "filter by company_name, descending" do 
            it "returns a sorted array of results that match" do
                expect(Customer.sort_by("company,desc")).to eq([@ca, @bb, @ac])
            end
        end
    end

  end

end