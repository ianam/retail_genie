document.addEventListener('DOMContentLoaded', () => {

    // Load the data from sale model:
    // Data is included in a data-sales attribute of our chart div
    // We load it, parse to JSON, and add it to the data array as objects
    let data = [];
    const saleData = document.querySelector("#myChart").dataset.sales;
    let saleJSON = JSON.parse(saleData);

    for (let key in saleJSON) {
        data.push({ month: key, value: saleJSON[key]})
    };

    data.forEach(item => {
        item.month = new Date(item.month)
        return item;
    });

    function compare(a, b) {
        if (a.month > b.month) return 1;
        if (a.month < b.month) return -1;
        return 0;
    }

    data.sort(compare)
    console.log("Date format", data)

    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: 'Value',
                data: data.map(d => d.value),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
    }
    });
});