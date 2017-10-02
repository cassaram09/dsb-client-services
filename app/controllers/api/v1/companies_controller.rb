class Api::V1::CompaniesController < ApplicationController

  def index
    @companies = @current_user.companies
    render json: @companies
  end
end
