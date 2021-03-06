Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show] 
    resources :invites, only: [:show]
    resources :leagues, only: [:index, :create, :destroy, :update, :show] do
      resources :teams, only: [:update, :show]
      patch '/user_teams/add', to: 'user_teams#update'
      delete '/user_teams/remove', to: 'user_teams#destroy'
      get '/user_teams/', to: 'user_teams#index'
      get '/own_team/', to: 'user_teams#own_team'
    end
  end
  root to: "static_pages#root"
end
