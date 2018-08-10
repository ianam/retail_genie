class Subregion < ApplicationRecord
    belongs_to :region
    has_many :companies, dependent: :nullify
    has_many :sales, dependent: :nullify
end
