class Region < ApplicationRecord
    has_one :subregion, dependent: :nullify
    has_many :companies, dependent: :nullify
end
