class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :deadline, :progress, :developer
  def developer
    self.object.developer.username
  end
end
