class CompaniesController < ApplicationController

    def new
        @company = Company.new
        @industry = Industry.all
        @subindustry = Subindustry.all 
        @region = Region.all 
    end

    def create
        @company = Company.new company_params
        @company.user = current_user

        if @company.city.downcase == "vancouver"
            @company.subregion_id = 1
        elsif @company.city.downcase == "toronto"
            @company.subregion_id = 2
        elsif @company.city.downcase == "montreal"
            @company.subregion_id = 3
        end

        if @company.save
            redirect_to company_path(@company.id)
        else
            render :new
        end
    end

    def show
        @company = Company.find params[:id]

        @data = Company.data(@company)
        @sales = Company.sales(@company)

        @industry_sales = Company.industry_sales(@company, 2017)

        if !@sales.empty?
            @total_sales = @sales.values.sum
            @avg_sales = @total_sales/(@sales.values.count)
        end
    end

    def index
        @companies = Company.order(created_at: :desc)
    end

    private
    def company_params
        params.require(:company).permit(:name, :region_id, :subregion_id, :industry_id, :subindustry_id, :address, :city)
    end
end
