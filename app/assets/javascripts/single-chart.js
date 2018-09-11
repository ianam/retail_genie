document.addEventListener('DOMContentLoaded', () => {

    // Load the data from sale model included in the 'data-sales' attribute
    // of the 'single-chart' canvas element at companies/show.html.erb

    let data = [];
    const saleData = document.querySelector("#single-chart").dataset.sales;
    let saleJSON = JSON.parse(saleData);

    // Create an array of sales objects with date and value as key-value pairs
    for (let key in saleJSON) {
        data.push({ date: key, value: saleJSON[key]})
    };

    // Create a JS Date object out of each date in our array
    data.forEach(item => {
        item.date = new Date(item.date)
        return item;
    });

    // Write a function that assigns dates a chronologically sequential value
    function compare(a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
    };

    // Sort the dates sequentially (chronologically)
    // This puts our months in the correct chronological order
    data.sort(compare)

    // Create empty arrays for each year of our data
    let data2010 = [], data2011 = [], data2012 = [], data2013 = [], data2014 = [], data2015 = [], data2016 = [], data2017 = []

    // Populate the data arrays for each year
    for (let point of data) {
        if (point.date.getFullYear() === 2010) {
            data2010.push(point);
        } else if (point.date.getFullYear() === 2011) {
            data2011.push(point);
        } else if (point.date.getFullYear() === 2012) {
            data2012.push(point);
        } else if (point.date.getFullYear() === 2013) {
            data2013.push(point);
        } else if (point.date.getFullYear() === 2014) {
            data2014.push(point);
        } else if (point.date.getFullYear() === 2015) {
            data2015.push(point);
        } else if (point.date.getFullYear() === 2016) {
            data2016.push(point);
        } else if (point.date.getFullYear() === 2017) {
            data2017.push(point);
        }
    };

    let currentChart;

    function drawChart(dataYear) {
        if (currentChart) {
            currentChart.destroy();
        };

        const ctx = document.getElementById("single-chart");
        currentChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                    label: 'Value',
                    data: dataYear.map(d => d.value),
                    backgroundColor: 'rgba(114, 17, 166, 0.2)', 
                    borderColor: 'rgba(114, 17, 166, 1)',
                    borderWidth: 1
                }],
            }
        });
    };

    // Draw the default chart
    drawChart(data2017);
    
    // Update the chart if a different year is selected
    document.querySelector('#year-selector').addEventListener('input', event => {
        const { currentTarget } = event;
        let selectedYear = currentTarget.value;
        if (selectedYear === '2017') {
            drawChart(data2017);
        } else if (selectedYear === '2016') {
            drawChart(data2016);
        } else if (selectedYear === '2015') {
            drawChart(data2015)
        } else if (selectedYear === '2014') {
            drawChart(data2014)
        } else if (selectedYear === '2013') {
            drawChart(data2013)
        } else if (selectedYear === '2012') {
            drawChart(data2012)
        } else if (selectedYear === '2011') {
            drawChart(data2011)
        } else if (selectedYear === '2010') {
            drawChart(data2010)
        };
    });
});
