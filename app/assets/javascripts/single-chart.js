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
    }

    // Sort the dates sequentially (chronologically)
    // This puts our months in the correct chronological order
    data.sort(compare)

    // Draw the chart
    const ctx = document.getElementById("single-chart");
    const singleChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: 'Value',
                data: data.map(d => d.value)
            }]
        },
        options: {
    }
    });
});