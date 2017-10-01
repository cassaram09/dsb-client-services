class CreateUserCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :user_companies do |t|
      t.belongs_to :user
      t.belongs_to :company
      t.timestamps
    end
  end
end
