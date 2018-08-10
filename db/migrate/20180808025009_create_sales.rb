class CreateSales < ActiveRecord::Migration[5.2]
  def change
    create_table :sales do |t|
      t.integer :value
      t.string :month
      t.integer :year
      t.references :industry, foreign_key: true
      t.references :subindustry, foreign_key: true
      t.references :region, foreign_key: true 
      t.references :subregion, foreign_key: true

      t.timestamps
    end
  end
end
