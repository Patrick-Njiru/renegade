class DevelopersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        developer = Developer.all
        render json:developers
    end

    def show
        developer = Developer.find(session[:user_id])
        render json:developers
    end

    def create
        developer = Developer.create!(developer_params)
        session[user_id]
        render json: developer, status: :created
    end

    private

    def developer_params
        params.permit (:username, :email, :profile_pic, :password)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
