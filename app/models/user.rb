class User < ApplicationRecord
    has_secure_password

    has_one :companies, dependent: :nullify

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

    validates(
        :email,
        presence: true,
        uniqueness: true,
        format: VALID_EMAIL_REGEX
    )

    def full_name
        first_name + " " + last_name
    end
end
