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

    //Select the city input element and get the raw HTML node
    var cityInputElement = d3.select("#city");
    var cityInputValue = cityInputElement.property("value");
    console.log(cityInputValue);

    //Select the state input element and get the raw HTML node
    var stateInputElement = d3.select("#state");
    var stateInputValue = stateInputElement.property("value");
    console.log(stateInputValue);

    //Select the shape input element and get the raw HTML node
    var countryInputElement = d3.select("#country");
    var countryInputValue = countryInputElement.property("value");
    console.log(countryInputValue);

    //Select the duration input element and get the raw HTML node
    var shapeInputElement = d3.select("#shape");
    var shapeInputValue = shapeInputElement.property("value");
    console.log(shapeInputValue);

    //Define filteredData variable
    var filteredData = tableData

    //Create If statement for multiple filters
    
    if (dateTimeInputValue !== "") {
        filteredData = filteredData.filter(sighting => sighting.datetime === dateTimeInputValue);
    }

    if (cityInputValue !== "") {
        filteredData = filteredData.filter(sighting => sighting.city === cityInputValue);
    }

    if (stateInputValue !== "") {
        filteredData = filteredData.filter(sighting => sighting.state === stateInputValue);
    }

    if (countryInputValue !== "") {
        filteredData = filteredData.filter(sighting => sighting.country === countryInputValue);
    }

    if (shapeInputValue !== "") {
        filteredData = filteredData.filter(sighting => sighting.shape === shapeInputValue);
    }

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

