class Sale < ApplicationRecord
    belongs_to :company, optional: true
    belongs_to :industry, optional: true
    belongs_to :subindustry, optional: true
    belongs_to :region, optional: true
    belongs_to :subregion, optional: true

    validates :value, presence: true
    validates :company, uniqueness: { scope: [:month, :year] }
end
