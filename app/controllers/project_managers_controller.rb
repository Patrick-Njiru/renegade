class ProjectManagersController < ApplicationController
    def index 
        Projectmanagers = Project_Manger.all
        render json: Projectmanagers
    end

    def show
        project_manager = ProjectManager.find(session[:user_id])
        render json: project_manager
    end

    private

    def render_not_found_response
        render json: {error: "User not found!"}, status: :not_found
    end
end
