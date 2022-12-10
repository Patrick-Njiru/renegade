class ProjectManager < ApplicationRecord
    has_secure_password
    validates :password, length: {minimum: 6}
    has_many  :projects
    has_many  :developers, through: :projects
end
