class CreateProjectManagers < ActiveRecord::Migration[7.0]
  def change
    create_table :project_managers do |t|
      t.string :name
      t.string :email
      t.string :profile_pic

      t.timestamps
    end
  end
end
