class Sale < ApplicationRecord
    belongs_to :company, optional: true
    belongs_to :industry, optional: true
    belongs_to :subindustry, optional: true
    belongs_to :region, optional: true
    belongs_to :subregion, optional: true

    validates :value, presence: true
    validates :company, uniqueness: { scope: [:month, :year] }
    # *******************************************************
    # Figure out why filter doesn't work on 1st loop
    # *******************************************************

    def self.filter_sale(sales)
        sales.each do |entry|
            if entry[:value] == ""
                sales.delete(entry)
            end
        end
        sales.each do |entry|
            if entry[:value] == ""
                sales.delete(entry)
            end
        end
        sales.each do |entry|
            if entry[:value] == ""
                sales.delete(entry)
            end
        end
        sales.each do |entry|
            if entry[:value] == ""
                sales.delete(entry)
            end
        end
        sales.each do |entry|
            if entry[:value] == ""
                sales.delete(entry)
            end
        end
        return sales
    end
end
