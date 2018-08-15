document.addEventListener('DOMContentLoaded', () => {

    // Load the data from sale model:
    // Data is included in a data-sales attribute of our chart div
    // We load it, parse to JSON, and add it to the data array as objects
    let data = [];
    const saleData = document.querySelector(".chart").dataset.sales;
    let saleJSON = JSON.parse(saleData);

    for (let key in saleJSON) {
        data.push({ month: key, value: saleJSON[key]})
    };

    // Define our margins
    const margin = {top: 10, right: 10, bottom: 100, left: 100};

    // Set chart size (minus margins)
    const width = 900 - margin.left - margin.right; // 790
    const height = 400 - margin.top - margin.bottom; // 290

    // Create an SVG within the chart div with the full size
    const svg = d3.select(".chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right) // 900
        .attr("height", height + margin.top + margin.bottom) // 400

    // Apply a transformation to center everything
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)

    // Scale X-Axis
    const x = d3.scaleBand()
        .domain(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.2);

    // Scale Y-Axis
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([height, 0]);

    // Add the axes
    const xLabels = d3.axisBottom(x);
    const yLabels = d3.axisLeft(y);

    g.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xLabels);

    g.append("g")
        .attr("class", "y-axis")
        .call(yLabels);

    // Label the axes
    g.append("text")
    .attr("class", "x-axis-label")
    .attr("x", width / 2)
    .attr("y", height + 50)
    .attr("text-anchor", "middle")
    .text("Months")

    g.append("text")
        .attr("class", "y-axis-label")
        .attr("x", -(height / 2))
        .attr("y", -60)
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text("Revenue ($)")

    // Draw the chart given data
    g.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
            .attr("x", d => x(d.month))
            .attr("y", d => y(d.value))
            .attr("width", x.bandwidth)
            .attr("height", d => {
                // scale the revenues to the range of our chart area
                // fill the entire height minus the residual area
                return height - y(d.value);
            })
            .attr("fill", "grey")
});