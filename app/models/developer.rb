class Developer < ApplicationRecord
    has_secure_password
    validates :password, length: {minimum: 6}
    validates :username, uniqueness: {caseSensitive: true}
    has_many :projects
    has_many :project_managers, through: :projects
end
