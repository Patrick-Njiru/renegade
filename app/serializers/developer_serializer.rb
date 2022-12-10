class DeveloperSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_pic
  has_many :projects
  has_many :project_managers
end
