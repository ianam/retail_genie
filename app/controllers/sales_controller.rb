class SalesController < ApplicationController

    def index
        @company = current_user.company
        @sales = Sale.where(company_id: current_user.company)

        @months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    end

    def new
        @sale = Sale.new
        @company = current_user.company
        @sales = Sale.where(company_id: current_user.company)

        @years = [2017, 2016]
        @months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    end

    def create
        params[:sales].each do |sale_params|
            if sale_params['value'].present?
                @sale = Sale.new(
                    value: sale_params[:value],
                    month: sale_params[:month],
                    year: sale_params[:year],
                    company: current_user.company,
                    industry_id: current_user.company.industry_id,
                    subindustry_id: current_user.company.subindustry_id,
                    region_id: current_user.company.region_id,
                    subregion_id: current_user.company.subregion_id
                )

                if !@sale.save
                    flash[:danger] = "Sales data already exists"
                    redirect_to new_sale_path and return
                end
            end
        end

        flash[:success] = "Sales saved"
        redirect_to sales_path
    end

    def edit
        @sale = Sale.find params[:id]

        respond_to do |format|
            format.html
            format.js
        end
    end

    def update
        @sale = Sale.find params[:id]

        if @sale.update(params.require(:sale).permit(:value))
            redirect_to sales_path
        else
            flash[:danger] = "Error"
            redirect_to sales_path
        end
    end

    def destroy
        @sale = Sale.find params[:id]
        @sale.destroy

        redirect_to sales_path
    end
end
