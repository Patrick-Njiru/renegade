Rails.application.routes.draw do
  resources :projects
  resources :project_managers
  resources :developers

  # Defines the root path route ("/")
  # root "articles#index"
end
