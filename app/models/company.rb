class Company < ApplicationRecord
    belongs_to :user
    belongs_to :industry
    belongs_to :subindustry, optional: true
    belongs_to :region
    belongs_to :subregion, optional: true
    has_many :sales, dependent: :nullify

    def self.search(company, year)
        sale = {}

        r = company.subregion ? 'subregion' : 'region'
        i = company.subindustry ? 'subindustry' : 'industry'

        r_id = company.subregion ? company.subregion.id : company.region.id
        i_id = company.subindustry ? company.subindustry.id : company.industry.id

        Sale.where(
            "#{r}_id = ? AND #{i}_id = ? AND year = ?",
            r_id, i_id, year).each {|item| sale[item.month] = item.value}

        return sale
    end
end
