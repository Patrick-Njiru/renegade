class ProjectsController < ApplicationController
    def create 
        project = Project.create(project_params)
        if project.valid?
            render json: project, status: :created
        else 
            render json: {errors: project.errors.full_messages}, status: :unprocessable_entity
        end  
    end

    def index 
        project = Project.all
        render json: project
    end

    private 
     def project_params
        param.permit(:title, :description, :deadline, :progress)
     end 
end
