class ProjectManagerSessionSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :profile_pic
end