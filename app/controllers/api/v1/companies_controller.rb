class Api::V1::CompaniesController < ApplicationController

  def index
    @companies = @current_user.companies
    render json: @companies
  end

  def show
    @company = Company.find(params[:id])
    if @company.users.include?(@current_user)
      render json: @company
    else
      render json: {error: 'Unauthorized'}
    end
  end

  private
  def company_params
    params.require(:company).permit(:id)
  end
end
