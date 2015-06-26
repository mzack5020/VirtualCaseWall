// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', { 'packages': ['corechart'] });
// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawLineChart);

function drawLineChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Months');
    data.addColumn('number', 'Events');
    data.addRows([
        ['January', 5],
        ['February', 20],
        ['March', 4],
        ['April', 3],
        ['May', 4],
        ['June', 5],
        ['July', 8],
        ['August', 20],
        ['September', 9],
        ['October', 8],
        ['November', 14],
        ['December', 25]
    ]);

    var properties = {
        title: 'Number of cases per month',
        curveType: 'function',
        legend: { position: 'bottom' }

    };

    var plot = new google.visualization.LineChart(document.getElementById('lineChart'));
  
    plot.draw(data, properties);

}