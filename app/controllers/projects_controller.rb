class ProjectsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def create 
        project = Project.create!(project_params)
        render json: project, status: :created
    end

    def index 
        project = Project.all
        render json: project
    end

    private 

    def project_params
       param.permit(:title, :description, :deadline, :progress, :project_manager_id, :developer_id)
    end 

    def render_unprocessable_entity_response(invalid)
       render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
