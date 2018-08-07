class Region < ApplicationRecord
    has_one :subregion, dependent: :nullify
end
