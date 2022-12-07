class ProjectManagerSessionsController < ApplicationController
  
  def create
    project_manager= ProjectManager.find_by(username: params[:username])
    
    if project_manager&.authenticate(params[:password])
      session[:user_id] = project_manager.id
      render json: project_manager
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete(:project_manager_id)
    head :no_content, status: :no_content
  end
end
