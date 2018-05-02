class RemoveCompanyIdFromCustomer < ActiveRecord::Migration[5.1]
  def change
    remove_column :customers, :company_id
  end
end
