Rails.application.routes.draw do
  resources :projects, only:[:index, :show] 
  resources :project_managers,only: [:index, :show]
  resources :developers, only:[:index, :show, :create]

  # Defines the root path route ("/")
  # root "articles#index"
end
