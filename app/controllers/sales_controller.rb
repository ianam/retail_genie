class SalesController < ApplicationController

    def index
        @sale = {}

        Sale.where("subindustry_id = ? AND region_id = ? AND year = ?", 1, 3, 2017).each {|item| @sale[item.month] = item.value}
    end

    def new
        @sale = Sale.new

        @years = [2017]
        @months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    end

    def create
        params[:sales].each do |sale_params|
            sale_permit
            @sale = Sale.new sale_params
            @sale.company = current_user.company
            @sale.industry_id = current_user.company.industry_id
            @sale.subindustry_id = current_user.company.subindustry_id
            @sale.region_id = current_user.company.region_id
            @sale.subregion_id = current_user.company.subregion_id
            @sale.save
        end
    end

    private
    def sale_permit
        params.require(:sales).each do |sale_params|
            sale_params.permit!
        end
    end
end
