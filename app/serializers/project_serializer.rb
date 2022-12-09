class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :deadline, :progress, :developer_id, :project_manager_id
  belongs_to :project_manager
  belongs_to :developer
end
