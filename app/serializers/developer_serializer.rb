class DeveloperSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_pic
end
