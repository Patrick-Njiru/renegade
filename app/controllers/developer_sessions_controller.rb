class DeveloperSessionsController < ApplicationController

  def create
    developer = Developer.find_by(username: params[:username])
    

    if developer&.authenticate(params[:password])
      session[:user_id] = developer.id
      render json: developer
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete(:developer_id)
    head :no_content, status: :no_content
  end
end
