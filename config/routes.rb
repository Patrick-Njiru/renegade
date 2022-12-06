Rails.application.routes.draw do
  get '/login/developer', to: 'developer_sessions#create'
  delete '/logout/logout', to: 'developer_sessions#destroy'
  get '/login/project_manager', to: 'project_manager_sessions#create'
  delete '/logout/project_manager', to: 'project_manager_sessions#destroy'

  resources :projects
  resources :project_managers
  resources :developers

  # Defines the root path route ("/")
  # root "articles#index"
end
