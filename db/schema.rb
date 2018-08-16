# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_08_16_183657) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.bigint "industry_id"
    t.bigint "subindustry_id"
    t.bigint "region_id"
    t.bigint "subregion_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.string "address"
    t.string "city"
    t.index ["industry_id"], name: "index_companies_on_industry_id"
    t.index ["region_id"], name: "index_companies_on_region_id"
    t.index ["subindustry_id"], name: "index_companies_on_subindustry_id"
    t.index ["subregion_id"], name: "index_companies_on_subregion_id"
    t.index ["user_id"], name: "index_companies_on_user_id", unique: true
  end

  create_table "industries", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "regions", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sales", force: :cascade do |t|
    t.integer "value"
    t.string "month"
    t.integer "year"
    t.bigint "industry_id"
    t.bigint "subindustry_id"
    t.bigint "region_id"
    t.bigint "subregion_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "company_id"
    t.index ["company_id"], name: "index_sales_on_company_id"
    t.index ["industry_id"], name: "index_sales_on_industry_id"
    t.index ["month", "year", "company_id"], name: "index_sales_on_month_and_year_and_company_id", unique: true
    t.index ["region_id"], name: "index_sales_on_region_id"
    t.index ["subindustry_id"], name: "index_sales_on_subindustry_id"
    t.index ["subregion_id"], name: "index_sales_on_subregion_id"
  end

  create_table "subindustries", force: :cascade do |t|
    t.string "name"
    t.bigint "industry_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["industry_id"], name: "index_subindustries_on_industry_id"
  end

  create_table "subregions", force: :cascade do |t|
    t.string "name"
    t.bigint "region_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["region_id"], name: "index_subregions_on_region_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "companies", "industries"
  add_foreign_key "companies", "regions"
  add_foreign_key "companies", "subindustries"
  add_foreign_key "companies", "subregions"
  add_foreign_key "sales", "companies"
  add_foreign_key "sales", "industries"
  add_foreign_key "sales", "regions"
  add_foreign_key "sales", "subindustries"
  add_foreign_key "sales", "subregions"
  add_foreign_key "subindustries", "industries"
  add_foreign_key "subregions", "regions"
end
