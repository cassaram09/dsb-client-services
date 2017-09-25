Rails.application.routes.draw do

  namespace :car, :defaults => { :format => 'json' } do
    namespace :v1 do

      resources :users, except: [:new, :create]
      resources  :auth, only: [:new, :create, :destroy]

    end  
  end

  get '/login' => 'car/v1/auth#new'
  post '/login' => 'car/v1/auth#create'
  get '/logout' => 'car/v1/auth#destroy'
  post '/signup' => 'car/v1/users#create'
  post '/password-reset' => 'car/v1/users#password'

  post '/mywebhook' => 'car/v1/users#webhook'

  root to: 'application#home'
  
end
