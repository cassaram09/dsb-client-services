Rails.application.routes.draw do

  namespace :api, :defaults => { :format => 'json' } do
    namespace :v1 do

      resources :users, except: [:new, :create]
      resources  :sessions, only: [:new, :create, :destroy]

    end  
  end

  get '/login' => 'api/v1/sessions#new'
  post '/login' => 'api/v1/sessions#create'
  get '/logout' => 'api/v1/sessions#destroy'
  post '/signup' => 'api/v1/users#create'
  post '/password-reset' => 'api/v1/users#password'
  
end
