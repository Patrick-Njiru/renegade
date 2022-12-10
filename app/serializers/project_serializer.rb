class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :deadline, :progress
  belongs_to :project_manager
  belongs_to :developer
end
