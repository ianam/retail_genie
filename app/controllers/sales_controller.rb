class SalesController < ApplicationController

    def index
        @sale = {}

        Sale.where("subindustry_id = ? AND region_id = ? AND year = ?", 1, 3, 2017).each {|item| @sale[item.month] = item.value}
    end
    
end
