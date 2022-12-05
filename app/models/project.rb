class Project < ApplicationRecord
  belongs_to :project_manager
  belongs_to :developer
end
