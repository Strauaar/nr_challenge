Rails.application.routes.draw do
  root to: "pages#root"
  namespace :api, defaults: {format: :json} do
    resources :companies, only: [:index]
    resources :customers, only: [:index]
  end 
end
