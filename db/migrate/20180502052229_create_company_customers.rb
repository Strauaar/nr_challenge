class CreateCompanyCustomers < ActiveRecord::Migration[5.1]
  def change
    create_table :company_customers do |t|
      t.integer :company_id, null: false
      t.integer :customer_id, null: false
      t.timestamps
    end
    add_index :company_customers, :company_id
    add_index :company_customers, :customer_id
  end
end
