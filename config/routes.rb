Rails.application.routes.draw do
  get '/', to: 'home#index', as: 'home'

  resources :companies
  resources :users
  resources :sales
  resource :session, only: [:new, :create, :destroy]
end
