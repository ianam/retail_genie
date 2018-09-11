document.addEventListener('DOMContentLoaded', () => {

    // See 'single-chart.js' for explanation of the code for 
    // obtaining & manipulating data

    function compare(a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
    }

    let compData = [];
    const saleData = document.querySelector("#dual-chart").dataset.sales;
    let saleJSON = JSON.parse(saleData);

    for (let key in saleJSON) {
        compData.push({ date: key, value: saleJSON[key]})
    };

    compData.forEach(item => {
        item.date = new Date(item.date)
        return item;
    });

    let canData = [];
    const saleData_id = document.querySelector("#single-chart").dataset.sales;
    let saleJSON_id = JSON.parse(saleData_id);

    for (let key in saleJSON_id) {
        canData.push({ date: key, value: saleJSON_id[key]})
    };

    canData.forEach(item => {
        item.date = new Date(item.date)
        return item;
    });

    compData.sort(compare)
    canData.sort(compare)

    let compData2016 = [], compData2017 = [], canData2016 = [], canData2017 = []

    for (let point of compData) {
        if (point.date.getFullYear() === 2016) {
            compData2016.push(point)
        } else if (point.date.getFullYear() === 2017) {
            compData2017.push(point)
        }
    };

    for (let point of canData) {
        if (point.date.getFullYear() === 2016) {
            canData2016.push(point)
        }  else if (point.date.getFullYear() === 2017) {
            canData2017.push(point)
        }
    };

    let currentChart;

    function drawChart(compDataYear, canDataYear) {
        if (currentChart) {
            currentChart.destroy();
        };

        const ctx = document.getElementById("dual-chart").getContext('2d');
        currentChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                    label: 'Company Data',
                    borderColor: 'rgb(4, 117, 19)',
                    backgroundColor: 'rgb(4, 117, 19, 0)',
                    data: compDataYear.map(d => d.value),
                    yAxisID: 'y-axis-1'
                }, {
                    label: 'Canadian Data',
                    borderColor: 'rgb(190, 13, 13)',
                    backgroundColor: 'rgb(190, 13, 13, 0)',
                    data: canDataYear.map(d => d.value),
                    yAxisID: 'y-axis-2'
                }]
            },
            options: {
                responsive: true,
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
    };

    drawChart(compData2017, canData2017);

    document.querySelector('#year-selector-dual').addEventListener('input', event => {
        const { currentTarget } = event;
        let selectedYear = currentTarget.value;
        if (selectedYear === '2017') {
            drawChart(compData2017, canData2017);
        } else if (selectedYear === '2016') {
            drawChart(compData2016, canData2016);
        }
    });
});