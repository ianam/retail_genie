class Company < ApplicationRecord
    belongs_to :user
    belongs_to :industry
    belongs_to :subindustry, optional: true
    belongs_to :region
    belongs_to :subregion, optional: true
    has_many :sales, dependent: :destroy

    # Search method for given company's industry sales by region, industry, and year
    def self.data(company, year)
        data = {}

        # If sub-categories exist, use those, otherwise use the parent categories
        r = company.subregion ? 'subregion' : 'region'
        i = company.subindustry ? 'subindustry' : 'industry'

        r_id = company.subregion ? company.subregion.id : company.region.id
        i_id = company.subindustry ? company.subindustry.id : company.industry.id

        # Search the db and push results to a 'data' hash
        Sale.where(
            "#{r}_id = ? AND #{i}_id = ? AND year = ? AND company_id IS ?",
            r_id, i_id, year, nil).each {|item| data["#{item.month}, #{item.year}"] = item.value}

        # Some subindustries do not have results for certain years
        # in this case, use the parent industry data for display
        if data.empty?
            Sale.where(
                "#{r}_id = ? AND industry_id = ? AND year = ?  AND company_id IS ?",
                r_id, company.industry.id, year, nil).each {|item| data["#{item.month}, #{item.year}"] = item.value}
        else
            return data
        end

        return data
    end

    # Search method for company-specific sales data
    def self.sales(company, year)
        sale = {}

        Sale.where("company_id = ? AND year = ?", company.id, year)
            .each {|item| sale["#{item.month}, #{item.year}"] = item.value}

        return sale
    end
end
