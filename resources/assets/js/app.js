//import our data
var data = require('./mapData');
var libraries = require('./libraryData');
var privateSchools = require('./privateSchoolData');
var publicSchools = require('./publicSchoolData');

//new leaflet client
L.mapbox.accessToken = 'pk.eyJ1Ijoid29wcnNrIiwiYSI6ImNpczBudWR1aDA0OHIyb3A2MW5tYmRkMGoifQ.2gh3oO0OBE1s3UWyVR9Vsg';
var geocoder = L.mapbox.geocoder( 'mapbox.places' );

//create base map from food deserts map
var map = L.mapbox.map('map', 'nashville.iad4amfc')
    .setView([36.1627, -86.7816], 12);


function addMarkers( dataSet, markerIcon ){
    for(var index=0; index<dataSet.length; index++){

        //create a new marker from the results
        var marker = L.marker([dataSet[index].marker.geometry.coordinates[1], dataSet[index].marker.geometry.coordinates[0]], {
            'title' : dataSet[index].name,
            icon: L.mapbox.marker.icon(markerIcon)
        });

        //add the marker to the map
        marker.addTo(map);

        //bind a popup box to it
        marker.bindPopup(
            '<strong>' + dataSet[index].name + '</strong><br />' +
            dataSet[index].address + '<br />' + dataSet[index].address2 + '<br />' +
            dataSet[index].phone
        );

        dataSet[index].marker = marker.toGeoJSON();

    }

}
/**
 * community centers
 * @type {Number}
 */
addMarkers( data, {
    'marker-color' : '#2980ca',
    'marker-symbol' : 'town-hall'
});

/**
 * Libraries
 * @type {Number}
 */
 addMarkers( libraries, {
     'marker-color' : '#fa0',
     'marker-symbol' : 'library'
 });

 /**
  * Private Schools
  * @type {Number}
  */
  addMarkers( privateSchools, {
      'marker-color' : '#9b59b6',
      'marker-symbol' : 'college'
  });

  /**
   * Public Schools
   * @type {Number}
   */
   addMarkers( publicSchools, {
       'marker-color' : '#2ecc71',
       'marker-symbol' : 'college'
   });

//loop through our data file, geocode the location
//GEOCODE SOME DATASET
function geocode( dataSet ){
    var count = dataSet.length;
    var calls = 0;
    for(var index=0; index<dataSet.length; index++){
        geocoder.query(dataSet[index].name + ', Nashville, ' + dataSet[index].address2, function(index, z, results){
            //console.log(dataSet[index].address + ', ' + dataSet[index].address2);
            //console.log(results);
            dataSet[index].marker.geometry.coordinates = [results.latlng[1], results.latlng[0]];
            dataSet[index].address = results.results.features[0].properties.address || '';
            dataSet[index].address2 = getCityState(results.results.features[0].place_name) || '';
            dataSet[index].phone = results.results.features[0].properties.tel || '';

            calls++;

            if(isLastCall()){
                console.log( JSON.stringify( dataSet ) );
                console.log(results);
            }

        }.bind(null, index));
    }

    function getCityState(place){
        var parts = place.split(',');
        var result = '';
        for(var i = 0; i < parts.length; i++){
            if(parts[i].indexOf('Tennessee') != -1){
                if(i > 0){
                    result = parts[i-1].trim() + ', ' + parts[i].trim();
                }else{
                    results = parts[i].trim();
                }
            }
        }
        console.log(result);

        return result;
    }

    function isLastCall(){
        return (calls === count);
    }
}

//geocode(require('./publicSchoolData-original'));
