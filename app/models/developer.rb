class Developer < ApplicationRecord
    has_secure_password
    validates :password_digest, length: {minimum: 6}
    has_many :projects
    has_many :projects_managers, through: :projects
end
