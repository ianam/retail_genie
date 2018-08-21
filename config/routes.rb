Rails.application.routes.draw do
  get '/', to: 'home#index', as: 'home'

  resources :companies
  resources :users
  resources :sales
  resources :data, only: [:index]
  resource :session, only: [:new, :create, :destroy]
end
