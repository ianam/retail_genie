class Subindustry < ApplicationRecord
    belongs_to :industry
    has_many :companies, dependent: :nullify
    has_many :sales, dependent: :nullify
end
