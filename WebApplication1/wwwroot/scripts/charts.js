// Bar Chart
new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
        labels: ["Electronics", "Clothing", "Groceries", "Books"],
        datasets: [{
            label: 'Sales (in $)',
            data: [1200, 900, 700, 300],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
});

// Line Chart
new Chart(document.getElementById("lineChart"), {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [{
            label: "Revenue Over Time",
            data: [1000, 1200, 950, 1300],
            fill: false,
            borderColor: 'blue'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
});

// Pie Chart
new Chart(document.getElementById("pieChart"), {
    type: 'pie',
    data: {
        labels: ["In Stock", "Out of Stock"],
        datasets: [{
            label: "Inventory Status",
            data: [80, 20],
            backgroundColor: ["green", "red"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
});
