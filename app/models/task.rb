class Task < ApplicationRecord
  alias_attribute :user, :owner
  belongs_to :company

  enum request_type: [ :design, :development, :marketing, :other]
  enum task_type: [ :support, :project ]
  enum priority: [ :low, :medium, :high]

  has_many :user_tasks, foreign_key: "assigned_task_id"
  has_many :assigned_users, through: :user_tasks
  belongs_to :owner, class_name: "User"

end


