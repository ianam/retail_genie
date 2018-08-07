class Industry < ApplicationRecord
    has_many :subindustries, dependent: :destroy
end
