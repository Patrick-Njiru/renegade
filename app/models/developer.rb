class Developer < ApplicationRecord
    has_secure_password
    validates :password_digest, length: {maximum: 6}
    has_many :projects
    has_many :projects, through: :project_managers 
end
