class AddUniqueIndexToSales < ActiveRecord::Migration[5.2]
  def change
    add_index :sales, [:month, :year, :company_id], unique: true
  end
end
