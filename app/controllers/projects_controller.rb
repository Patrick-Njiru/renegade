class ProjectsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        render json: Project.all
    end

    def create 
        project = Project.create!(project_params)
        render json: project, status: :created
    end

    def update 
        project = Project.find(params[:id])
        project.update!(project_params)
        render json: project, status: :ok
    end


    def destroy
        project = Project.find(params[:id])
        project.destroy
        render json: { message: 'Project deleted'}, status: :no_content
    end

    private 

    def project_params
       params.permit(:title, :description, :deadline, :progress, :project_manager_id, :developer_id)
    end 

    def render_unprocessable_entity_response(invalid)
       render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
