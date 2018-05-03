require 'rails_helper'

RSpec.describe Company do

  it "is not valid without a name" do
    subject { described_class.new }
    expect(subject).to_not be_valid
  end

  it "has many customers" do 
    assc = described_class.reflect_on_association(:customers)
    expect(assc.macro).to eq :has_many
  end

end