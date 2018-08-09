class CompaniesController < ApplicationController

    def new
        @company = Company.new
        @industry = Industry.all
        @subindustry = Subindustry.all 
        @region = Region.all 
        @subregion = Subregion.all
    end

    def create
        @company = Company.new company_params
        @company.user = current_user
        
        # render json: @company

        if @company.save
            redirect_to company_path(@company.id)
        else
            render :new
        end
    end

    def show
        @company = Company.find params[:id]
        # Populate sales data based on selected year
        @sale = Company.search(@company, 2017)
    end

    private
    def company_params
        params.require(:company).permit(:name, :region_id, :subregion_id, :industry_id, :subindustry_id)
    end
end
