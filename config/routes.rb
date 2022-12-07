Rails.application.routes.draw do
  resources :projects, only:[:index, :show] 
  resources :project_managers, only: [:index, :show]
  resources :developers, only:[:index, :show, :create]

  # Developer routes
  post '/login/developer', to: 'developer_sessions#create'
  delete '/logout/developer', to: 'developer_sessions#destroy'
  post 'signup/developer', to: 'developers_controller#create'
  
  #Project_Manger routes
  post '/login/project_manager', to: 'project_manager_sessions#create'
  delete '/logout/project_manager', to: 'project_manager_sessions#destroy'
  get 'project_managers/me', to: 'project_managers_controller#show'
  get 'developers/me', to: 'developers_controller#show'

  # Defines the root path route ("/")
  # root "articles#index"
end
