class ProjectManagersController < ApplicationController
    def index 
        Projectmanagers = Project_Manger.all
        render json: Projectmanagers
    end

    def show
        Projectmanagers = Project_Manger.find(session[user_id])
        render json: Projectmanagers
    end
end
