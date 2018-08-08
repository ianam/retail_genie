class CompaniesController < ApplicationController

    def new
        @company = Company.new
        @industry = Industry.all
        @subindustry = Subindustry.all 
        @region = Region.all 
        @subregion = Subregion.all
    end

    def create
        puts company_params
        @company = Company.new company_params
        render json: @company
    end

    private
    def company_params
        params.require(:company).permit(:name, :region_id, :subregion_id, :industry_id, :subindustry_id)
    end
end
