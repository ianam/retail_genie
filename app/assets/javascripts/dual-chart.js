document.addEventListener('DOMContentLoaded', () => {

    // See 'single-chart.js' for explanation of the code for 
    // obtaining & manipulating data

    function compare(a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
    }

    let data = [];
    const saleData = document.querySelector("#dual-chart").dataset.sales;
    let saleJSON = JSON.parse(saleData);

    for (let key in saleJSON) {
        data.push({ date: key, value: saleJSON[key]})
    };

    data.forEach(item => {
        item.date = new Date(item.date)
        return item;
    });

    let sales = [];
    const saleData_id = document.querySelector("#single-chart").dataset.sales;
    let saleJSON_id = JSON.parse(saleData_id);

    for (let key in saleJSON_id) {
        sales.push({ date: key, value: saleJSON_id[key]})
    };

    sales.forEach(item => {
        item.date = new Date(item.date)
        return item;
    });

    data.sort(compare)
    sales.sort(compare)

    const lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'Company Data',
            borderColor: '#FF0000',
            data: data.map(d => d.value),
            yAxisID: 'y-axis-1'
        }, {
            label: 'Canadian Data',
            borderColor: '#0000FF',
            data: sales.map(d => d.value),
            yAxisID: 'y-axis-2'
        }]
    };

    const ctx = document.getElementById("dual-chart").getContext('2d');
    const dualChart = new Chart(ctx, {
        type: 'line',
        data: lineChartData,
        options: {
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1'
                }, {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    gridLines: {
                        drawOnChartArea: false
                    }
                }]
            }
        }
    });

});
