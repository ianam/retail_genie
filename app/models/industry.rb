class Industry < ApplicationRecord
    has_many :subindustries, dependent: :destroy
    has_many :companies, dependent: :nullify
end
