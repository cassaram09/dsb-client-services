class User < ApplicationRecord
  has_secure_password
  has_many :user_companies
  has_many :companies, through: :user_companies

  has_many :user_tasks, foreign_key: "assigned_user_id"
  has_many :assigned_tasks, through: :user_tasks
  has_many :tasks, foreign_key: "owner_id"

end
