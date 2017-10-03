class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :description
      t.boolean :complete
      t.integer :priority
      t.date :due_date
      t.float :billable_hours
      t.integer :request_type 
      t.integer :task_type
      t.belongs_to :owner, class_name: "User"
      t.belongs_to :company

      t.timestamps
    end
  end
end
