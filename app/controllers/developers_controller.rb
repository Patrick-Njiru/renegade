class DevelopersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        developer = Developer.all
        render json:developers
    end

    def show
        developer = Developer.find(session[:developer_id])
        render json:developers
    end

    def create
        developer = Developer.create(developer_params)
        if developer.valid?
            render json: developer, status: :created
        else 
            render json: {errors: developer.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def developer_params
        params.permit (:username, :email, :profile_pic, :password)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
