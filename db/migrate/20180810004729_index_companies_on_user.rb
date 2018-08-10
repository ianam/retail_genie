class IndexCompaniesOnUser < ActiveRecord::Migration[5.2]
  def change
    add_index :companies, :user_id, unique: true
  end
end
