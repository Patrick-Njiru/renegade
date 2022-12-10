class DevelopersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        developers = Developer.all
        render json:developers
    end

    def show
        developer = Developer.find(session[:user_id])
        render json:developers
    end

    def create
        developer = Developer.create!(developer_params)
        session[:user_id] = developer.id
        render json: developer, status: :created
    end
    def render_not_found_response
    render json: {error: "User not found!"}, status: :not_found
    end

    private

    def developer_params
        params.permit(:username, :email, :profile_pic, :password, :password_confirmation)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
