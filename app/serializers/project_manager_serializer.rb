class ProjectManagerSerializer < ActiveModel::Serializer
  attributes  :username, :email, :profile_pic
  has_many :projects
  has_many :developers
end
