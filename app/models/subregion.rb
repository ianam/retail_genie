class Subregion < ApplicationRecord
    belongs_to :region
    has_many :companies, dependent: :nullify
end
