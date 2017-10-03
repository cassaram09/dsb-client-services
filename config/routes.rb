Rails.application.routes.draw do
  
 
  namespace :api, :defaults => { :format => 'json' } do
    namespace :v1 do

      resources :users, except: [:new, :create] do 
        collection do
           get '/current-user', to: 'users#get_current_user'
        end
      end
      resources :companies
      resources :tasks
      resources  :auth, only: [:new, :create, :destroy]

    end  
  end

  get '/login' => 'api/v1/auth#new'
  post '/login' => 'api/v1/auth#create'
  get '/logout' => 'api/v1/auth#destroy'
  post '/signup' => 'api/v1/users#create'
  post '/password-reset' => 'api/v1/users#password'

  post '/mywebhook' => 'api/v1/users#webhook'

  root to: 'application#home'
  
end
