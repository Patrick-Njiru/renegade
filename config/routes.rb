Rails.application.routes.draw do
  resources :projects, only:[:index, :show] 
  resources :project_managers, only: [:index, :show]
  resources :developers, only:[:index, :show, :create]
  post '/login/developer', to: 'developer_sessions#create'
  delete '/logout/logout', to: 'developer_sessions#destroy'
  post '/login/project_manager', to: 'project_manager_sessions#create'
  delete '/logout/project_manager', to: 'project_manager_sessions#destroy'
  get '/me', to: 'user#show'

  # Defines the root path route ("/")
  # root "articles#index"
end
