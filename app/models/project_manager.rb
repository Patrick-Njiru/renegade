class ProjectManager < ApplicationRecord
    has_secure_password
    validates :password, length, {maximum: 6}
    has_many  :developers
    has_many  :projects through: :developers
end
