document.addEventListener('DOMContentLoaded', () => {

    let data = [];
    const sales = document.querySelector(".chart").dataset.sales
    const sales_json = JSON.parse(sales)

    for (let value in sales_json) {
        data.push(sales_json[value]);
    };

    d3.select(".chart")
      .selectAll("div")
      .data(data)
        .enter()
        .append("div")
        .style("width", function(d) { return d * 0.001 + "px"; })
        .text(function(d) { return d; });
});