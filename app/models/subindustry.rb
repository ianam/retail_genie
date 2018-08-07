class Subindustry < ApplicationRecord
    belongs_to :industry
    has_many :companies, dependent: :nullify
end
