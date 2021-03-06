class Api::V1::AuthController < ApplicationController
  
  skip_before_action :authenticate

  def create
    if invalid(auth_params)
      render json: {error: "Email and Password required."}, status: 401
      return 
    end
 
    @user = User.find_by(email: auth_params[:email])

    if @user && @user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: @user.id})
      render json: {jwt: jwt}
    else
      render json: {error: "User or password not correct."}
    end

  end

  def invalid(params)
    params[:email] == nil || params[:password] == nil || params[:password] == "" || params[:email] == ""
  end

  private
  def auth_params
    params.require(:user).permit(:email, :password)
  end

end
