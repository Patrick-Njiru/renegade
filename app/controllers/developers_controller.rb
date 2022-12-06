class DevelopersController < ApplicationController
    def index
        developer = Developer.all
        render json:developers
    end

    def show
        developer = Developer.find(params[:id])
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
        params.permit (developer, :password)
    end
end
