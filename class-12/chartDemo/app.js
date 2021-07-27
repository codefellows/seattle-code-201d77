'use strict';

const ctx = document.getElementById('chart').getContext('2d');

const data = [1, 2, 3, 4, 5, 6];
const labelColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelColors,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: labelColors,
            borderColor: [
                'rgba(255, 99, 132, 1)',
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
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});