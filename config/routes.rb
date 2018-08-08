Rails.application.routes.draw do
  get '/', to: 'home#index', as: 'home'

  resources :companies
  resources :users
  resources :sales
end
