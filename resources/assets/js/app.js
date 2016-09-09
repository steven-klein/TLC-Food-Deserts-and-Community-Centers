//import our data
var data = require('./mapData');
var libraries = require('./libraryData');

//new leaflet client
L.mapbox.accessToken = 'pk.eyJ1Ijoid29wcnNrIiwiYSI6ImNpczBudWR1aDA0OHIyb3A2MW5tYmRkMGoifQ.2gh3oO0OBE1s3UWyVR9Vsg';
var geocoder = L.mapbox.geocoder( 'mapbox.places' );

//create base map from food deserts map
var map = L.mapbox.map('map', 'nashville.iad4amfc')
    .setView([36.1627, -86.7816], 12);

/**
 * community centers
 * @type {Number}
 */
for(var index=0; index<data.length; index++){

    //create a new marker from the results
    var marker = L.marker([data[index].marker.geometry.coordinates[1], data[index].marker.geometry.coordinates[0]], {
        'title' : data[index].name,
        icon: L.mapbox.marker.icon({
            'marker-color' : '#2980ca',
            'marker-symbol' : 'town-hall'
        })
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

/**
 * Libraries
 * @type {Number}
 */
for(var index=0; index<libraries.length; index++){

    //create a new marker from the results
    var marker = L.marker([libraries[index].marker.geometry.coordinates[1], libraries[index].marker.geometry.coordinates[0]], {
        'title' : libraries[index].name,
        icon: L.mapbox.marker.icon({
            'marker-color' : '#fa0',
            'marker-symbol' : 'library'
        })
    });

    //add the marker to the map
    marker.addTo(map);

    //bind a popup box to it
    marker.bindPopup(
        '<strong>' + libraries[index].name + '</strong><br />' +
        libraries[index].address + '<br />' + libraries[index].address2 + '<br />' +
        libraries[index].phone
    );

    libraries[index].marker = marker.toGeoJSON();

}

//loop through our data file, geocode the location
/*GEOCODE SOME DATASET
for(var index=0; index<libraries.length; index++){
    geocoder.query(libraries[index].address + ', ' + libraries[index].address2, function(index, z, results){
        //console.log(libraries[index].address + ', ' + libraries[index].address2);
        //console.log(results);
        libraries[index].marker.geometry.coordinates = [results.latlng[1], results.latlng[0]];

        console.log( JSON.stringify( libraries ) );

    }.bind(null, index));
}
*/
