class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.references :user, foreign_key: true
      t.references :industry, foreign_key: true
      t.references :subindustry, foreign_key: true
      t.references :region, foreign_key: true 
      t.references :subregion, foreign_key: true

      t.timestamps
    end
  end
end
