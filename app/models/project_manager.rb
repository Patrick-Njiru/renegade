class ProjectManager < ApplicationRecord
    validates :password, presence: true
    # , length: {minimum: 6}
    has_many  :projects
    has_many  :developers, through: :projects
end
