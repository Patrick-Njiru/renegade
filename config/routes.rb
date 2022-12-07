Rails.application.routes.draw do
  resources :projects, only:[:index, :show] 
  resources :project_managers, only: [:index, :show]
  resources :developers, only:[:index, :show]

  # Developer routes
  post '/login/developer', to: 'developer_sessions#create'
  delete '/logout/developer', to: 'developers#destroy'
  post 'signup/developer', to: 'developers#create'
  
  #Project_Manger routes
  post '/login/project_manager', to: 'project_manager_sessions#create'
  delete '/logout/project_manager', to: 'project_manager_sessions#destroy'
  get 'project_managers/me', to: 'project_managers#show'
  get 'developers/me', to: 'developers#show'

  # Defines the root path route ("/")
  # root "articles#index"
end
