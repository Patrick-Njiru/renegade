class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :descrption, :deadline, :progress
  belongs_to :project_manager
  belongs_to :developer
end
