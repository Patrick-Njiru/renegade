class ProjectManagerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :projects, serializer: ProjectSerializer
  has_many :developers
end
