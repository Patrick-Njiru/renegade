class Project < ApplicationRecord
  belongs_to :project_manager
  belongs_to :developer
  validates :developer_id, :title, :description, :deadline, :progress, presence: true, on: :create

  validates :description, uniqueness: true, length: {minimum: 20}
end
