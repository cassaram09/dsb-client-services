class Api::V1::TasksController < ApplicationController

  def index
    render json: Task.all
  end

  def create 
    @task = Task.new(task_params)
    @task.owner = @current_user
    @task.save
    render json: @task
  end

  private
  def task_params
    params.require(:task).permit(:id, :name, :description, :request_type, :company_id)
  end
end
