// from data.js
var tableData = data;
var tbody = d3.select("tbody");

//YOUR CODE HERE!
tableData.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

//Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
    
    var currentRow = 1;
    var table = document.getElementById('ufo-table');
    var rowCount = table.rows.length; 
    for (var i = currentRow; i < rowCount; i++) {
    table.deleteRow(currentRow);
    }

    //Select the datetime input element and get the raw HTML node
    var dateTimeInputElement = d3.select("#datetime");
    var dateTimeInputValue = dateTimeInputElement.property("value");
    console.log(dateTimeInputValue);

    //Define filteredData variable
    var filteredData = tableData

    //Create If statement for multiple filters
    
    filteredData = filteredData.filter(sighting => sighting.datetime === dateTimeInputValue);

    console.log(filteredData);

    //Create HTML table and enter content using filtered data
    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});

