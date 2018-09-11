document.addEventListener('DOMContentLoaded', () => {
    let data = [];
    const saleData = document.querySelector("#doughnut-chart").dataset.sales;
    let saleJSON = JSON.parse(saleData);

    for (let key in saleJSON) {
        data.push({ industry: key, sales: saleJSON[key]})
    };

    const industryData = {
        labels: ["Motor Vehicle & Parts", "Furniture & Home Furnishings", "Electronics & Applicances", "Building Materials & Garden Equipment", "Food & Beverage", "Health & Personal Care", "Gasoline Stations", "Clothing & Accessories", "Sport, Hobby, Book & Music", "General Merchandise"],
        datasets: [{
            label: 'Industry Data',
            data: data.map(d => d.sales),
            backgroundColor: [
                '#FF5733',
                '#D9B243',
                '#3D4197',
                '#36AE36',
                '#6D3391',
                '#31648C',
                '#D9D743',
                '#AE367A',
                '#2B8B78',
                '#9CCB3F',
                '#878787'
            ]
        }]
    };

    const ctx = document.getElementById("doughnut-chart").getContext('2d');
    const dualChart = new Chart(ctx, {
        type: 'doughnut',
        data: industryData,
        options: {
            responsive: true,
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Sales by Industry 2017'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
});