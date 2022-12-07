# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_05_184439) do
  create_table "developers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "profile_pic"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_managers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "profile_pic"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.date "deadline"
    t.string "progress"
    t.integer "project_manager_id", null: false
    t.integer "developer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["developer_id"], name: "index_projects_on_developer_id"
    t.index ["project_manager_id"], name: "index_projects_on_project_manager_id"
  end

  add_foreign_key "projects", "developers"
  add_foreign_key "projects", "project_managers"
end
