Rails.application.routes.draw do
  resources :projects, only:[:index, :create, :destroy, :update] 
  resources :project_managers, only: [:index]
  resources :developers, only:[:index]

  # Developer routes
  post '/login/developer', to: 'developer_sessions#create'
  delete '/logout/developer', to: 'developer_sessions#destroy'
  post 'signup/developer', to: 'developers#create'
  get '/developers/me', to: 'developers#show'
  
  #Project_Manger routes
  post '/login/project_manager', to: 'project_manager_sessions#create'
  delete '/logout/project_manager', to: 'project_manager_sessions#destroy'
  get '/project_managers/me', to: 'project_managers#show'

end
