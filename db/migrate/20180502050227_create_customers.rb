class CreateCustomers < ActiveRecord::Migration[5.1]
  def change
    create_table :customers do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :company_id
      t.timestamps
    end
    add_index :customers, :company_id
  end
end
