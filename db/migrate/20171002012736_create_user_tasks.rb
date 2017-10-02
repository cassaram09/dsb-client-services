class CreateUserTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :user_tasks do |t|
      t.belongs_to :assigned_user, class_name: "User"
      t.belongs_to :assigned_task, class_name: "Task"

      t.timestamps
    end
  end
end
