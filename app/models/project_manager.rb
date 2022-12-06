class ProjectManager < ApplicationRecord
    has_secure_password
    validates :password, length, {minimum: 6}
    has_many  :developers
    has_many  :projects through: :developers
end
