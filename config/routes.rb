Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :pokemon, except: [:new, :edit]
  end

  root to: 'static_pages#root'
end
