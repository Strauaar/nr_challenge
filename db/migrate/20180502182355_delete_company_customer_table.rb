class DeleteCompanyCustomerTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :company_customers
  end
end
