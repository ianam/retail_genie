document.addEventListener('DOMContentLoaded', () => {

    // Load the data from sale model:
    // Data is included in a data-sales attribute of our chart div
    // We load it, parse to JSON, and add it to the data array as objects
    let data = [];
    const saleData = document.querySelector(".dual-chart").dataset.sales;
    let saleJSON = JSON.parse(saleData);

    for (let key in saleJSON) {
        data.push({ month: key, value: saleJSON[key]})
    };

    let sales = [];
    const saleData_id = document.querySelector(".chart").dataset.sales;
    let saleJSON_id = JSON.parse(saleData_id);

    for (let key in saleJSON_id) {
        sales.push({ month: key, value: saleJSON_id[key]})
    };

    const margin = {top: 30, right: 40, bottom: 30, left: 50};

    width = 600 - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;

    const svg = d3.select(".dual-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)

    const x = d3.scaleBand()
        .domain(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
        .range([0, width]);

    const y0 = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([height, 0]);

    const y1 = d3.scaleLinear()
        .domain([0, d3.max(sales, d => d.value)])
        .range([height, 0]);

    const xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(5);

    const yAxisLeft = d3.svg.axis().scale(y0)
        .orient("left").ticks(5);

    const yAxisRight = d3.svg.axis().scale(y1)
        .orient("right").ticks(5); 




    // ????
    var valueline = d3.svg.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y0(d.data); });
        
    var valueline2 = d3.svg.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y1(d.sales); });
    // end ???

    svg.append("path")        // Add the valueline path.
        .attr("d", valueline(data));

    svg.append("path")        // Add the valueline2 path.
        .style("stroke", "red")
        .attr("d", valueline2(sales));

    svg.append("g")            // Add the X Axis
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .style("fill", "steelblue")
        .call(yAxisLeft);	

    svg.append("g")				
        .attr("class", "y axis")	
        .attr("transform", "translate(" + width + " ,0)")	
        .style("fill", "red")		
        .call(yAxisRight);
});
