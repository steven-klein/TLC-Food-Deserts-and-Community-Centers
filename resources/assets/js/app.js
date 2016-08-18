//import our data
var data = require('./mapData');

//new leaflet client
L.mapbox.accessToken = 'pk.eyJ1Ijoid29wcnNrIiwiYSI6ImNpczBudWR1aDA0OHIyb3A2MW5tYmRkMGoifQ.2gh3oO0OBE1s3UWyVR9Vsg';
var geocoder = L.mapbox.geocoder( 'mapbox.places' );

//create base map from food deserts map
var map = L.mapbox.map('map', 'nashville.iad4amfc')
    .setView([36.1627, -86.7816], 12);

//loop through our data file, geocode the location
for(var index=0; index<data.length; index++){

    //create a new marker from the results
    var marker = L.marker([data[index].marker.geometry.coordinates[1], data[index].marker.geometry.coordinates[0]], {
        'title' : data[index].name
    });

    //add the marker to the map
    marker.addTo(map);

    //bind a popup box to it
    marker.bindPopup(
        '<strong>' + data[index].name + '</strong><br />' +
        data[index].address + '<br />' + data[index].address2 + '<br />' +
        data[index].phone
    );

    data[index].marker = marker.toGeoJSON();

}
