Rails.application.routes.draw do

  resources :users
  namespace :api, :defaults => { :format => 'json' } do
    namespace :v1 do

      resources :users, except: [:new, :create]
      resources  :auth, only: [:new, :create, :destroy]

    end  
  end

  get '/login' => 'api/v1/auth#new'
  post '/login' => 'api/v1/auth#create'
  get '/logout' => 'api/v1/auth#destroy'
  post '/signup' => 'api/v1/users#create'
  post '/password-reset' => 'api/v1/users#password'
  
end
