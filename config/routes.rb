Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show] 
    resources :leagues, only: [:create, :destroy, :update, :show] do
      resources :teams, only: [:update, :show]
    end
  end
  root to: "static_pages#root"
end
