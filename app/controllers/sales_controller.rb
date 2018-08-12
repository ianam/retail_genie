class SalesController < ApplicationController

    def index
        @company = current_user.company
        @sales = Sale.where(company_id: current_user.company)
    end

    def new
        @sale = Sale.new

        @years = [2017, 2016]
        @months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    end

    def create
        @years = [2017, 2016]
        @months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        sale_permit

        new_sales = Sale.filter_sale(params[:sales])

        new_sales.each do |sale_params|
            @sale = Sale.new sale_params
            @sale.company = current_user.company
            @sale.industry_id = current_user.company.industry_id
            @sale.subindustry_id = current_user.company.subindustry_id
            @sale.region_id = current_user.company.region_id
            @sale.subregion_id = current_user.company.subregion_id

            if !@sale.save
                render :new and return
            end
        end

        redirect_to sales_path
    end

    private
    def sale_permit
        params.require(:sales).each do |sale_params|
            sale_params.permit!
        end
    end
end
