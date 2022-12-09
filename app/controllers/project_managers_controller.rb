class ProjectManagersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        render json: ProjectManger.all
    end

    def show
        project_manager = ProjectManger.find(session[:user_id])
        render json: project_manager
    end

    private

    def render_not_found_response
        render json: {error: "Hero not found"}, status: :not_found
    end
end
