class AddCompanyIdToCustomers < ActiveRecord::Migration[5.1]
  def change
    add_column :customers, :company_id, :integer
  end
end
