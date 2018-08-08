class Company < ApplicationRecord
    belongs_to :user
    belongs_to :industry
    belongs_to :subindustry, optional: true
    belongs_to :region
    belongs_to :subregion, optional: true
    has_many :sales, dependent: :nullify
end
