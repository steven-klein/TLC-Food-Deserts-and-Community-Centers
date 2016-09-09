(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./libraryData":2,"./mapData":3}],2:[function(require,module,exports){
module.exports = [
  {
    "name": "Main Library",
    "address": "615 Church Street",
    "address2": "Nashville, TN 37219",
    "phone": "(615) 862-5800",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.781612,
          36.161754
        ]
      }
    }
  },
  {
    "name": "Bellevue Branch",
    "address": "720 Baugh Road",
    "address2": "Nashville, TN 37221",
    "phone": "(615) 862-5854",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.93676,
          36.069075
        ]
      }
    }
  },
  {
    "name": "Bordeaux Branch",
    "address": "4000 Clarksville Pike",
    "address2": "Nashville, TN 37218",
    "phone": "(615) 862-5856",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.837894,
          36.211469
        ]
      }
    }
  },
  {
    "name": "Donelson Branch",
    "address": "2315 Lebanon Pike",
    "address2": "Nashville, TN 37214",
    "phone": "(615) 862-5859",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.683447,
          36.168353
        ]
      }
    }
  },
  {
    "name": "East Branch",
    "address": "206 Gallatin Ave",
    "address2": "Nashville, TN 37206",
    "phone": "(615) 862-5860",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.750197,
          36.178945
        ]
      }
    }
  },
  {
    "name": "Edgehill Branch",
    "address": "1409 12th Avenue South",
    "address2": "Nashville, TN 37203",
    "phone": "(615) 862-5861",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.787677,
          36.139199
        ]
      }
    }
  },
  {
    "name": "Edmondson Pike Branch",
    "address": "5501 Edmondson Pike",
    "address2": "Nashville, TN 37211",
    "phone": "(615) 880-3957",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.7744,
          36.1622
        ]
      }
    }
  },
  {
    "name": "Goodlettsville Branch",
    "address": "205 Rivergate Parkway",
    "address2": "Goodlettsville, TN 37072",
    "phone": "(615) 862-5862",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.71012,
          36.314148
        ]
      }
    }
  },
  {
    "name": "Green Hills Branch",
    "address": "3701 Benham Ave",
    "address2": "Nashville, TN 37215",
    "phone": "(615) 862-5863",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.809103,
          36.109508
        ]
      }
    }
  },
  {
    "name": "Hadley Park Branch",
    "address": "1039 28th Ave N",
    "address2": "Nashville, TN 37208",
    "phone": "(615) 862-5865",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.820836,
          36.166809
        ]
      }
    }
  },
  {
    "name": "Hermitage Branch",
    "address": "3700 James Kay Lane",
    "address2": "Hermitage, TN 37076",
    "phone": "(615) 880-3951",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.61674,
          36.177515
        ]
      }
    }
  },
  {
    "name": "Inglewood Branch",
    "address": "4312 Gallatin Pike",
    "address2": "Nashville, TN 37216",
    "phone": "(615) 862-5866",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.724964,
          36.225782
        ]
      }
    }
  },
  {
    "name": "Looby Branch",
    "address": "2301 Rosa L Parks Blvd",
    "address2": "Nashville, TN 37228",
    "phone": "(615) 862-5867",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.808099,
          36.192995
        ]
      }
    }
  },
  {
    "name": "Madison Branch",
    "address": "610 Gallatin Pike South",
    "address2": "Madison, TN 37115",
    "phone": "(615) 862-5868",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.714051,
          36.257025
        ]
      }
    }
  },
  {
    "name": "Nashville Talking Library",
    "address": "505 Heritage Dr",
    "address2": "Madison, TN 37115",
    "phone": "(615) 862-5874",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.724255,
          36.264546
        ]
      }
    }
  },
  {
    "name": "North Branch",
    "address": "1001 Monroe Street",
    "address2": "Nashville, TN 37208",
    "phone": "(615) 862-5858",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.795862,
          36.174068
        ]
      }
    }
  },
  {
    "name": "Old Hickory Branch",
    "address": "1010 Jones St",
    "address2": "Old Hickory, TN 37138",
    "phone": "(615) 862-5869",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.646262,
          36.260012
        ]
      }
    }
  },
  {
    "name": "Pruitt Branch",
    "address": "117 Charles E. Davis Boulevard",
    "address2": "Nashville, TN 37210",
    "phone": "(615) 862-5985",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.761662,
          36.151673
        ]
      }
    }
  },
  {
    "name": "Richland Park Branch",
    "address": "4711 Charlotte Ave",
    "address2": "Nashville, TN 37209",
    "phone": "(615) 862-5870",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.843984,
          36.152121
        ]
      }
    }
  },
  {
    "name": "Southeast Branch",
    "address": "5260 Hickory Hollow Pkwy",
    "address2": "Antioch, TN 37013",
    "phone": "(615) 862-5871",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.655466,
          36.05282
        ]
      }
    }
  },
  {
    "name": "Thompson Lane Branch",
    "address": "380 Thompson Ln",
    "address2": "Nashville, TN 37211",
    "phone": "(615) 862-5873",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.743253,
          36.111175
        ]
      }
    }
  },
  {
    "name": "Watkins Park Branch",
    "address": "612 17th Ave N",
    "address2": "Nashville, TN 37203",
    "phone": "(615) 862-5872",
    "marker": {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.7744,
          36.1622
        ]
      }
    }
  }
]

},{}],3:[function(require,module,exports){
module.exports = [{
    name: "Coleman Regional Center",
    address: "384 Thompson Lane",
    address2: "Nashville, TN 37211",
    phone: "615-862-8445",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.719147, 36.116912]
        }
    }
}, {
    name: "East Regional Center",
    address: "600 Woodland Street",
    address2: "Nashville, TN 37206",
    phone: "615-862-8448",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.760417, 36.172877]
        }
    }
}, {
    name: "Hadley Regional Center",
    address: "1037 28th Avenue North",
    address2: "Nashville, TN 37208",
    phone: "615-862-8451",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.816711, 36.183278]
        }
    }
}, {
    name: "Hartman Regional Center",
    address: "2801 Tucker Road",
    address2: "Nashville, TN 37218",
    phone: "615-862-8479",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.827367, 36.208036]
        }
    }
}, {
    name: "McCabe Regional Center",
    address: "101 46th Avenue North",
    address2: "Nashville, TN 37209",
    phone: "615-862-8457",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.841171, 36.14112]
        }
    }
}, {
    name: "Sevier Regional Center",
    address: "3021 Lealand Lane",
    address2: "Nashville, TN 37204",
    phone: "615-862-8466",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.789191, 36.119169]
        }
    }
}, {
    name: "Southeast Regional Center",
    address: "5260 Hickory Hollow Parkway Suite 202",
    address2: "Antioch, TN 37013",
    phone: "615-862-8902",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.655466, 36.05282]
        }
    }
}, {
    name: "Antioch",
    address: "5023 Blue Hole Road",
    address2: "Antioch, TN 37013",
    phone: "615-315-9363",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.673459, 36.055349]
        }
    }
}, {
    name: "Bellevue",
    address: "656 Colice Jeanne Road",
    address2: "Nashville, TN 37221",
    phone: "615-862-8435",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.934617, 36.072144]
        }
    }
}, {
    name: "Cleveland",
    address: "610 Vernon Winfrey Avenue",
    address2: "Nashville, TN 37207",
    phone: "615-862-8444",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.761048, 36.18821]
        }
    }
}, {
    name: "Easley Center at Rose Park",
    address: "1000 Edgehill Avenue",
    address2: "Nashville, TN 37203",
    phone: "615-862-8465",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.783456, 36.142987]
        }
    }
}, {
    name: "Elizabeth Senior Center",
    address: "1701 Arthur Avenue",
    address2: "Nashville, TN 37208",
    phone: "615-862-8449",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.802375, 36.178413]
        }
    }
}, {
    name: "Hermitage",
    address: "3720 James Kay Lane",
    address2: "Hermitage, TN 37076",
    phone: "615-316-0843",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.616154, 36.177632]
        }
    }
}, {
    name: "Kirkpatrick",
    address: "620 South 9th Street",
    address2: "Nashville, TN 37206",
    phone: "615-862-8453",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.753074, 36.168546]
        }
    }
}, {
    name: "Looby",
    address: "2301 Metro Center Blvd.",
    address2: "Nashville, TN 37228",
    phone: "615-862-8454",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.7744, 36.1622]
        }
    }
}, {
    name: "Madison",
    address: "510 Cumberland Avenue",
    address2: "Madison, TN 37115",
    phone: "615-862-8459",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.701004, 36.265973]
        }
    }
}, {
    name: "McFerrin",
    address: "310 Grace Street",
    address2: "Nashville, TN 37207",
    phone: "615-862-8458",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.767594, 36.182601]
        }
    }
}, {
    name: "Morgan",
    address: "411 Hume Street",
    address2: "Nashville, TN 37208",
    phone: "615-862-8462",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.790481, 36.180341]
        }
    }
}, {
    name: "Napier",
    address: "73 Fairfield Street",
    address2: "Nashville, TN 37210",
    phone: "615-256-4474",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.756855, 36.15078]
        }
    }
}, {
    name: "Old Hickory",
    address: "1050 Donelson Drive",
    address2: "Old Hickory, TN 37138",
    phone: "615-862-8698",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.649685, 36.265315]
        }
    }
}, {
    name: "Paradise Ridge",
    address: "3000 Morgan Road",
    address2: "Joelton, TN 37080",
    phone: "615-862-8509",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.859674, 36.337964]
        }
    }
}, {
    name: "Parkwood",
    address: "3220 Vailview Drive",
    address2: "Nashville, TN 37207",
    phone: "615-862-8495",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.771357, 36.234899]
        }
    }
}, {
    name: "Shelby",
    address: "South 20th St at Shelby Ave",
    address2: "Nashville, TN 37206",
    phone: "615-862-8467",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.735969, 36.168408]
        }
    }
}, {
    name: "South Inglewood",
    address: "1624 Rebecca Street",
    address2: "Nashville, TN 37216",
    phone: "615-862-8452",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.727333, 36.195423]
        }
    }
}, {
    name: "Watkins",
    address: "616 17th Avenue North",
    address2: "Nashville, TN 37203",
    phone: "615-862-8468",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.8014, 36.1696]
        }
    }
}, {
    name: "West",
    address: "6105 Morrow Road",
    address2: "Nashville, TN 37209",
    phone: "615-862-8469",
    marker: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Point",
            coordinates: [-86.863055, 36.163446]
        }
    }
}];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsInJlc291cmNlcy9hc3NldHMvanMvbGlicmFyeURhdGEuanMiLCJyZXNvdXJjZXMvYXNzZXRzL2pzL21hcERhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vaW1wb3J0IG91ciBkYXRhXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vbWFwRGF0YScpO1xudmFyIGxpYnJhcmllcyA9IHJlcXVpcmUoJy4vbGlicmFyeURhdGEnKTtcblxuLy9uZXcgbGVhZmxldCBjbGllbnRcbkwubWFwYm94LmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pZDI5d2NuTnJJaXdpWVNJNkltTnBjekJ1ZFdSMWFEQTBPSEl5YjNBMk1XNXRZbVJrTUdvaWZRLjJnaDNvTzBPQkUxczNVV3lWUjlWc2cnO1xudmFyIGdlb2NvZGVyID0gTC5tYXBib3guZ2VvY29kZXIoICdtYXBib3gucGxhY2VzJyApO1xuXG4vL2NyZWF0ZSBiYXNlIG1hcCBmcm9tIGZvb2QgZGVzZXJ0cyBtYXBcbnZhciBtYXAgPSBMLm1hcGJveC5tYXAoJ21hcCcsICduYXNodmlsbGUuaWFkNGFtZmMnKVxuICAgIC5zZXRWaWV3KFszNi4xNjI3LCAtODYuNzgxNl0sIDEyKTtcblxuLyoqXG4gKiBjb21tdW5pdHkgY2VudGVyc1xuICogQHR5cGUge051bWJlcn1cbiAqL1xuZm9yKHZhciBpbmRleD0wOyBpbmRleDxkYXRhLmxlbmd0aDsgaW5kZXgrKyl7XG5cbiAgICAvL2NyZWF0ZSBhIG5ldyBtYXJrZXIgZnJvbSB0aGUgcmVzdWx0c1xuICAgIHZhciBtYXJrZXIgPSBMLm1hcmtlcihbZGF0YVtpbmRleF0ubWFya2VyLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdLCBkYXRhW2luZGV4XS5tYXJrZXIuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF1dLCB7XG4gICAgICAgICd0aXRsZScgOiBkYXRhW2luZGV4XS5uYW1lLFxuICAgICAgICBpY29uOiBMLm1hcGJveC5tYXJrZXIuaWNvbih7XG4gICAgICAgICAgICAnbWFya2VyLWNvbG9yJyA6ICcjMjk4MGNhJyxcbiAgICAgICAgICAgICdtYXJrZXItc3ltYm9sJyA6ICd0b3duLWhhbGwnXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAvL2FkZCB0aGUgbWFya2VyIHRvIHRoZSBtYXBcbiAgICBtYXJrZXIuYWRkVG8obWFwKTtcblxuICAgIC8vYmluZCBhIHBvcHVwIGJveCB0byBpdFxuICAgIG1hcmtlci5iaW5kUG9wdXAoXG4gICAgICAgICc8c3Ryb25nPicgKyBkYXRhW2luZGV4XS5uYW1lICsgJzwvc3Ryb25nPjxiciAvPicgK1xuICAgICAgICBkYXRhW2luZGV4XS5hZGRyZXNzICsgJzxiciAvPicgKyBkYXRhW2luZGV4XS5hZGRyZXNzMiArICc8YnIgLz4nICtcbiAgICAgICAgZGF0YVtpbmRleF0ucGhvbmVcbiAgICApO1xuXG4gICAgZGF0YVtpbmRleF0ubWFya2VyID0gbWFya2VyLnRvR2VvSlNPTigpO1xuXG59XG5cbi8qKlxuICogTGlicmFyaWVzXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5mb3IodmFyIGluZGV4PTA7IGluZGV4PGxpYnJhcmllcy5sZW5ndGg7IGluZGV4Kyspe1xuXG4gICAgLy9jcmVhdGUgYSBuZXcgbWFya2VyIGZyb20gdGhlIHJlc3VsdHNcbiAgICB2YXIgbWFya2VyID0gTC5tYXJrZXIoW2xpYnJhcmllc1tpbmRleF0ubWFya2VyLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdLCBsaWJyYXJpZXNbaW5kZXhdLm1hcmtlci5nZW9tZXRyeS5jb29yZGluYXRlc1swXV0sIHtcbiAgICAgICAgJ3RpdGxlJyA6IGxpYnJhcmllc1tpbmRleF0ubmFtZSxcbiAgICAgICAgaWNvbjogTC5tYXBib3gubWFya2VyLmljb24oe1xuICAgICAgICAgICAgJ21hcmtlci1jb2xvcicgOiAnI2ZhMCcsXG4gICAgICAgICAgICAnbWFya2VyLXN5bWJvbCcgOiAnbGlicmFyeSdcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIC8vYWRkIHRoZSBtYXJrZXIgdG8gdGhlIG1hcFxuICAgIG1hcmtlci5hZGRUbyhtYXApO1xuXG4gICAgLy9iaW5kIGEgcG9wdXAgYm94IHRvIGl0XG4gICAgbWFya2VyLmJpbmRQb3B1cChcbiAgICAgICAgJzxzdHJvbmc+JyArIGxpYnJhcmllc1tpbmRleF0ubmFtZSArICc8L3N0cm9uZz48YnIgLz4nICtcbiAgICAgICAgbGlicmFyaWVzW2luZGV4XS5hZGRyZXNzICsgJzxiciAvPicgKyBsaWJyYXJpZXNbaW5kZXhdLmFkZHJlc3MyICsgJzxiciAvPicgK1xuICAgICAgICBsaWJyYXJpZXNbaW5kZXhdLnBob25lXG4gICAgKTtcblxuICAgIGxpYnJhcmllc1tpbmRleF0ubWFya2VyID0gbWFya2VyLnRvR2VvSlNPTigpO1xuXG59XG5cbi8vbG9vcCB0aHJvdWdoIG91ciBkYXRhIGZpbGUsIGdlb2NvZGUgdGhlIGxvY2F0aW9uXG4vKkdFT0NPREUgU09NRSBEQVRBU0VUXG5mb3IodmFyIGluZGV4PTA7IGluZGV4PGxpYnJhcmllcy5sZW5ndGg7IGluZGV4Kyspe1xuICAgIGdlb2NvZGVyLnF1ZXJ5KGxpYnJhcmllc1tpbmRleF0uYWRkcmVzcyArICcsICcgKyBsaWJyYXJpZXNbaW5kZXhdLmFkZHJlc3MyLCBmdW5jdGlvbihpbmRleCwgeiwgcmVzdWx0cyl7XG4gICAgICAgIC8vY29uc29sZS5sb2cobGlicmFyaWVzW2luZGV4XS5hZGRyZXNzICsgJywgJyArIGxpYnJhcmllc1tpbmRleF0uYWRkcmVzczIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgICBsaWJyYXJpZXNbaW5kZXhdLm1hcmtlci5nZW9tZXRyeS5jb29yZGluYXRlcyA9IFtyZXN1bHRzLmxhdGxuZ1sxXSwgcmVzdWx0cy5sYXRsbmdbMF1dO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeSggbGlicmFyaWVzICkgKTtcblxuICAgIH0uYmluZChudWxsLCBpbmRleCkpO1xufVxuKi9cbiIsIm1vZHVsZS5leHBvcnRzID0gW1xuICB7XG4gICAgXCJuYW1lXCI6IFwiTWFpbiBMaWJyYXJ5XCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiNjE1IENodXJjaCBTdHJlZXRcIixcbiAgICBcImFkZHJlc3MyXCI6IFwiTmFzaHZpbGxlLCBUTiAzNzIxOVwiLFxuICAgIFwicGhvbmVcIjogXCIoNjE1KSA4NjItNTgwMFwiLFxuICAgIFwibWFya2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAtODYuNzgxNjEyLFxuICAgICAgICAgIDM2LjE2MTc1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQmVsbGV2dWUgQnJhbmNoXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiNzIwIEJhdWdoIFJvYWRcIixcbiAgICBcImFkZHJlc3MyXCI6IFwiTmFzaHZpbGxlLCBUTiAzNzIyMVwiLFxuICAgIFwicGhvbmVcIjogXCIoNjE1KSA4NjItNTg1NFwiLFxuICAgIFwibWFya2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAtODYuOTM2NzYsXG4gICAgICAgICAgMzYuMDY5MDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJCb3JkZWF1eCBCcmFuY2hcIixcbiAgICBcImFkZHJlc3NcIjogXCI0MDAwIENsYXJrc3ZpbGxlIFBpa2VcIixcbiAgICBcImFkZHJlc3MyXCI6IFwiTmFzaHZpbGxlLCBUTiAzNzIxOFwiLFxuICAgIFwicGhvbmVcIjogXCIoNjE1KSA4NjItNTg1NlwiLFxuICAgIFwibWFya2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAtODYuODM3ODk0LFxuICAgICAgICAgIDM2LjIxMTQ2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRG9uZWxzb24gQnJhbmNoXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiMjMxNSBMZWJhbm9uIFBpa2VcIixcbiAgICBcImFkZHJlc3MyXCI6IFwiTmFzaHZpbGxlLCBUTiAzNzIxNFwiLFxuICAgIFwicGhvbmVcIjogXCIoNjE1KSA4NjItNTg1OVwiLFxuICAgIFwibWFya2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAtODYuNjgzNDQ3LFxuICAgICAgICAgIDM2LjE2ODM1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRWFzdCBCcmFuY2hcIixcbiAgICBcImFkZHJlc3NcIjogXCIyMDYgR2FsbGF0aW4gQXZlXCIsXG4gICAgXCJhZGRyZXNzMlwiOiBcIk5hc2h2aWxsZSwgVE4gMzcyMDZcIixcbiAgICBcInBob25lXCI6IFwiKDYxNSkgODYyLTU4NjBcIixcbiAgICBcIm1hcmtlclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gICAgICBcInByb3BlcnRpZXNcIjoge30sXG4gICAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiUG9pbnRcIixcbiAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gICAgICAgICAgLTg2Ljc1MDE5NyxcbiAgICAgICAgICAzNi4xNzg5NDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkVkZ2VoaWxsIEJyYW5jaFwiLFxuICAgIFwiYWRkcmVzc1wiOiBcIjE0MDkgMTJ0aCBBdmVudWUgU291dGhcIixcbiAgICBcImFkZHJlc3MyXCI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwM1wiLFxuICAgIFwicGhvbmVcIjogXCIoNjE1KSA4NjItNTg2MVwiLFxuICAgIFwibWFya2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAtODYuNzg3Njc3LFxuICAgICAgICAgIDM2LjEzOTE5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRWRtb25kc29uIFBpa2UgQnJhbmNoXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiNTUwMSBFZG1vbmRzb24gUGlrZVwiLFxuICAgIFwiYWRkcmVzczJcIjogXCJOYXNodmlsbGUsIFROIDM3MjExXCIsXG4gICAgXCJwaG9uZVwiOiBcIig2MTUpIDg4MC0zOTU3XCIsXG4gICAgXCJtYXJrZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICAgICAgICAgIC04Ni43NzQ0LFxuICAgICAgICAgIDM2LjE2MjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkdvb2RsZXR0c3ZpbGxlIEJyYW5jaFwiLFxuICAgIFwiYWRkcmVzc1wiOiBcIjIwNSBSaXZlcmdhdGUgUGFya3dheVwiLFxuICAgIFwiYWRkcmVzczJcIjogXCJHb29kbGV0dHN2aWxsZSwgVE4gMzcwNzJcIixcbiAgICBcInBob25lXCI6IFwiKDYxNSkgODYyLTU4NjJcIixcbiAgICBcIm1hcmtlclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gICAgICBcInByb3BlcnRpZXNcIjoge30sXG4gICAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiUG9pbnRcIixcbiAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gICAgICAgICAgLTg2LjcxMDEyLFxuICAgICAgICAgIDM2LjMxNDE0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiR3JlZW4gSGlsbHMgQnJhbmNoXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiMzcwMSBCZW5oYW0gQXZlXCIsXG4gICAgXCJhZGRyZXNzMlwiOiBcIk5hc2h2aWxsZSwgVE4gMzcyMTVcIixcbiAgICBcInBob25lXCI6IFwiKDYxNSkgODYyLTU4NjNcIixcbiAgICBcIm1hcmtlclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gICAgICBcInByb3BlcnRpZXNcIjoge30sXG4gICAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiUG9pbnRcIixcbiAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gICAgICAgICAgLTg2LjgwOTEwMyxcbiAgICAgICAgICAzNi4xMDk1MDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkhhZGxleSBQYXJrIEJyYW5jaFwiLFxuICAgIFwiYWRkcmVzc1wiOiBcIjEwMzkgMjh0aCBBdmUgTlwiLFxuICAgIFwiYWRkcmVzczJcIjogXCJOYXNodmlsbGUsIFROIDM3MjA4XCIsXG4gICAgXCJwaG9uZVwiOiBcIig2MTUpIDg2Mi01ODY1XCIsXG4gICAgXCJtYXJrZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICAgICAgICAgIC04Ni44MjA4MzYsXG4gICAgICAgICAgMzYuMTY2ODA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJIZXJtaXRhZ2UgQnJhbmNoXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiMzcwMCBKYW1lcyBLYXkgTGFuZVwiLFxuICAgIFwiYWRkcmVzczJcIjogXCJIZXJtaXRhZ2UsIFROIDM3MDc2XCIsXG4gICAgXCJwaG9uZVwiOiBcIig2MTUpIDg4MC0zOTUxXCIsXG4gICAgXCJtYXJrZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICAgICAgICAgIC04Ni42MTY3NCxcbiAgICAgICAgICAzNi4xNzc1MTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkluZ2xld29vZCBCcmFuY2hcIixcbiAgICBcImFkZHJlc3NcIjogXCI0MzEyIEdhbGxhdGluIFBpa2VcIixcbiAgICBcImFkZHJlc3MyXCI6IFwiTmFzaHZpbGxlLCBUTiAzNzIxNlwiLFxuICAgIFwicGhvbmVcIjogXCIoNjE1KSA4NjItNTg2NlwiLFxuICAgIFwibWFya2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAtODYuNzI0OTY0LFxuICAgICAgICAgIDM2LjIyNTc4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTG9vYnkgQnJhbmNoXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiMjMwMSBSb3NhIEwgUGFya3MgQmx2ZFwiLFxuICAgIFwiYWRkcmVzczJcIjogXCJOYXNodmlsbGUsIFROIDM3MjI4XCIsXG4gICAgXCJwaG9uZVwiOiBcIig2MTUpIDg2Mi01ODY3XCIsXG4gICAgXCJtYXJrZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICAgICAgICAgIC04Ni44MDgwOTksXG4gICAgICAgICAgMzYuMTkyOTk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNYWRpc29uIEJyYW5jaFwiLFxuICAgIFwiYWRkcmVzc1wiOiBcIjYxMCBHYWxsYXRpbiBQaWtlIFNvdXRoXCIsXG4gICAgXCJhZGRyZXNzMlwiOiBcIk1hZGlzb24sIFROIDM3MTE1XCIsXG4gICAgXCJwaG9uZVwiOiBcIig2MTUpIDg2Mi01ODY4XCIsXG4gICAgXCJtYXJrZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICAgICAgICAgIC04Ni43MTQwNTEsXG4gICAgICAgICAgMzYuMjU3MDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOYXNodmlsbGUgVGFsa2luZyBMaWJyYXJ5XCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiNTA1IEhlcml0YWdlIERyXCIsXG4gICAgXCJhZGRyZXNzMlwiOiBcIk1hZGlzb24sIFROIDM3MTE1XCIsXG4gICAgXCJwaG9uZVwiOiBcIig2MTUpIDg2Mi01ODc0XCIsXG4gICAgXCJtYXJrZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICAgICAgICAgIC04Ni43MjQyNTUsXG4gICAgICAgICAgMzYuMjY0NTQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOb3J0aCBCcmFuY2hcIixcbiAgICBcImFkZHJlc3NcIjogXCIxMDAxIE1vbnJvZSBTdHJlZXRcIixcbiAgICBcImFkZHJlc3MyXCI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwOFwiLFxuICAgIFwicGhvbmVcIjogXCIoNjE1KSA4NjItNTg1OFwiLFxuICAgIFwibWFya2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAtODYuNzk1ODYyLFxuICAgICAgICAgIDM2LjE3NDA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiT2xkIEhpY2tvcnkgQnJhbmNoXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiMTAxMCBKb25lcyBTdFwiLFxuICAgIFwiYWRkcmVzczJcIjogXCJPbGQgSGlja29yeSwgVE4gMzcxMzhcIixcbiAgICBcInBob25lXCI6IFwiKDYxNSkgODYyLTU4NjlcIixcbiAgICBcIm1hcmtlclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gICAgICBcInByb3BlcnRpZXNcIjoge30sXG4gICAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiUG9pbnRcIixcbiAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gICAgICAgICAgLTg2LjY0NjI2MixcbiAgICAgICAgICAzNi4yNjAwMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlBydWl0dCBCcmFuY2hcIixcbiAgICBcImFkZHJlc3NcIjogXCIxMTcgQ2hhcmxlcyBFLiBEYXZpcyBCb3VsZXZhcmRcIixcbiAgICBcImFkZHJlc3MyXCI6IFwiTmFzaHZpbGxlLCBUTiAzNzIxMFwiLFxuICAgIFwicGhvbmVcIjogXCIoNjE1KSA4NjItNTk4NVwiLFxuICAgIFwibWFya2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAtODYuNzYxNjYyLFxuICAgICAgICAgIDM2LjE1MTY3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUmljaGxhbmQgUGFyayBCcmFuY2hcIixcbiAgICBcImFkZHJlc3NcIjogXCI0NzExIENoYXJsb3R0ZSBBdmVcIixcbiAgICBcImFkZHJlc3MyXCI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwOVwiLFxuICAgIFwicGhvbmVcIjogXCIoNjE1KSA4NjItNTg3MFwiLFxuICAgIFwibWFya2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAtODYuODQzOTg0LFxuICAgICAgICAgIDM2LjE1MjEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU291dGhlYXN0IEJyYW5jaFwiLFxuICAgIFwiYWRkcmVzc1wiOiBcIjUyNjAgSGlja29yeSBIb2xsb3cgUGt3eVwiLFxuICAgIFwiYWRkcmVzczJcIjogXCJBbnRpb2NoLCBUTiAzNzAxM1wiLFxuICAgIFwicGhvbmVcIjogXCIoNjE1KSA4NjItNTg3MVwiLFxuICAgIFwibWFya2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAtODYuNjU1NDY2LFxuICAgICAgICAgIDM2LjA1MjgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUaG9tcHNvbiBMYW5lIEJyYW5jaFwiLFxuICAgIFwiYWRkcmVzc1wiOiBcIjM4MCBUaG9tcHNvbiBMblwiLFxuICAgIFwiYWRkcmVzczJcIjogXCJOYXNodmlsbGUsIFROIDM3MjExXCIsXG4gICAgXCJwaG9uZVwiOiBcIig2MTUpIDg2Mi01ODczXCIsXG4gICAgXCJtYXJrZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICAgICAgICAgIC04Ni43NDMyNTMsXG4gICAgICAgICAgMzYuMTExMTc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXYXRraW5zIFBhcmsgQnJhbmNoXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiNjEyIDE3dGggQXZlIE5cIixcbiAgICBcImFkZHJlc3MyXCI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwM1wiLFxuICAgIFwicGhvbmVcIjogXCIoNjE1KSA4NjItNTg3MlwiLFxuICAgIFwibWFya2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAgICAgICAgICAtODYuNzc0NCxcbiAgICAgICAgICAzNi4xNjIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbl1cbiIsIm1vZHVsZS5leHBvcnRzID0gW3tcbiAgICBuYW1lOiBcIkNvbGVtYW4gUmVnaW9uYWwgQ2VudGVyXCIsXG4gICAgYWRkcmVzczogXCIzODQgVGhvbXBzb24gTGFuZVwiLFxuICAgIGFkZHJlc3MyOiBcIk5hc2h2aWxsZSwgVE4gMzcyMTFcIixcbiAgICBwaG9uZTogXCI2MTUtODYyLTg0NDVcIixcbiAgICBtYXJrZXI6IHtcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFstODYuNzE5MTQ3LCAzNi4xMTY5MTJdXG4gICAgICAgIH1cbiAgICB9XG59LCB7XG4gICAgbmFtZTogXCJFYXN0IFJlZ2lvbmFsIENlbnRlclwiLFxuICAgIGFkZHJlc3M6IFwiNjAwIFdvb2RsYW5kIFN0cmVldFwiLFxuICAgIGFkZHJlc3MyOiBcIk5hc2h2aWxsZSwgVE4gMzcyMDZcIixcbiAgICBwaG9uZTogXCI2MTUtODYyLTg0NDhcIixcbiAgICBtYXJrZXI6IHtcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFstODYuNzYwNDE3LCAzNi4xNzI4NzddXG4gICAgICAgIH1cbiAgICB9XG59LCB7XG4gICAgbmFtZTogXCJIYWRsZXkgUmVnaW9uYWwgQ2VudGVyXCIsXG4gICAgYWRkcmVzczogXCIxMDM3IDI4dGggQXZlbnVlIE5vcnRoXCIsXG4gICAgYWRkcmVzczI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwOFwiLFxuICAgIHBob25lOiBcIjYxNS04NjItODQ1MVwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni44MTY3MTEsIDM2LjE4MzI3OF1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIkhhcnRtYW4gUmVnaW9uYWwgQ2VudGVyXCIsXG4gICAgYWRkcmVzczogXCIyODAxIFR1Y2tlciBSb2FkXCIsXG4gICAgYWRkcmVzczI6IFwiTmFzaHZpbGxlLCBUTiAzNzIxOFwiLFxuICAgIHBob25lOiBcIjYxNS04NjItODQ3OVwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni44MjczNjcsIDM2LjIwODAzNl1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIk1jQ2FiZSBSZWdpb25hbCBDZW50ZXJcIixcbiAgICBhZGRyZXNzOiBcIjEwMSA0NnRoIEF2ZW51ZSBOb3J0aFwiLFxuICAgIGFkZHJlc3MyOiBcIk5hc2h2aWxsZSwgVE4gMzcyMDlcIixcbiAgICBwaG9uZTogXCI2MTUtODYyLTg0NTdcIixcbiAgICBtYXJrZXI6IHtcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFstODYuODQxMTcxLCAzNi4xNDExMl1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIlNldmllciBSZWdpb25hbCBDZW50ZXJcIixcbiAgICBhZGRyZXNzOiBcIjMwMjEgTGVhbGFuZCBMYW5lXCIsXG4gICAgYWRkcmVzczI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwNFwiLFxuICAgIHBob25lOiBcIjYxNS04NjItODQ2NlwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni43ODkxOTEsIDM2LjExOTE2OV1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIlNvdXRoZWFzdCBSZWdpb25hbCBDZW50ZXJcIixcbiAgICBhZGRyZXNzOiBcIjUyNjAgSGlja29yeSBIb2xsb3cgUGFya3dheSBTdWl0ZSAyMDJcIixcbiAgICBhZGRyZXNzMjogXCJBbnRpb2NoLCBUTiAzNzAxM1wiLFxuICAgIHBob25lOiBcIjYxNS04NjItODkwMlwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni42NTU0NjYsIDM2LjA1MjgyXVxuICAgICAgICB9XG4gICAgfVxufSwge1xuICAgIG5hbWU6IFwiQW50aW9jaFwiLFxuICAgIGFkZHJlc3M6IFwiNTAyMyBCbHVlIEhvbGUgUm9hZFwiLFxuICAgIGFkZHJlc3MyOiBcIkFudGlvY2gsIFROIDM3MDEzXCIsXG4gICAgcGhvbmU6IFwiNjE1LTMxNS05MzYzXCIsXG4gICAgbWFya2VyOiB7XG4gICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbLTg2LjY3MzQ1OSwgMzYuMDU1MzQ5XVxuICAgICAgICB9XG4gICAgfVxufSwge1xuICAgIG5hbWU6IFwiQmVsbGV2dWVcIixcbiAgICBhZGRyZXNzOiBcIjY1NiBDb2xpY2UgSmVhbm5lIFJvYWRcIixcbiAgICBhZGRyZXNzMjogXCJOYXNodmlsbGUsIFROIDM3MjIxXCIsXG4gICAgcGhvbmU6IFwiNjE1LTg2Mi04NDM1XCIsXG4gICAgbWFya2VyOiB7XG4gICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbLTg2LjkzNDYxNywgMzYuMDcyMTQ0XVxuICAgICAgICB9XG4gICAgfVxufSwge1xuICAgIG5hbWU6IFwiQ2xldmVsYW5kXCIsXG4gICAgYWRkcmVzczogXCI2MTAgVmVybm9uIFdpbmZyZXkgQXZlbnVlXCIsXG4gICAgYWRkcmVzczI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwN1wiLFxuICAgIHBob25lOiBcIjYxNS04NjItODQ0NFwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni43NjEwNDgsIDM2LjE4ODIxXVxuICAgICAgICB9XG4gICAgfVxufSwge1xuICAgIG5hbWU6IFwiRWFzbGV5IENlbnRlciBhdCBSb3NlIFBhcmtcIixcbiAgICBhZGRyZXNzOiBcIjEwMDAgRWRnZWhpbGwgQXZlbnVlXCIsXG4gICAgYWRkcmVzczI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwM1wiLFxuICAgIHBob25lOiBcIjYxNS04NjItODQ2NVwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni43ODM0NTYsIDM2LjE0Mjk4N11cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIkVsaXphYmV0aCBTZW5pb3IgQ2VudGVyXCIsXG4gICAgYWRkcmVzczogXCIxNzAxIEFydGh1ciBBdmVudWVcIixcbiAgICBhZGRyZXNzMjogXCJOYXNodmlsbGUsIFROIDM3MjA4XCIsXG4gICAgcGhvbmU6IFwiNjE1LTg2Mi04NDQ5XCIsXG4gICAgbWFya2VyOiB7XG4gICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbLTg2LjgwMjM3NSwgMzYuMTc4NDEzXVxuICAgICAgICB9XG4gICAgfVxufSwge1xuICAgIG5hbWU6IFwiSGVybWl0YWdlXCIsXG4gICAgYWRkcmVzczogXCIzNzIwIEphbWVzIEtheSBMYW5lXCIsXG4gICAgYWRkcmVzczI6IFwiSGVybWl0YWdlLCBUTiAzNzA3NlwiLFxuICAgIHBob25lOiBcIjYxNS0zMTYtMDg0M1wiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni42MTYxNTQsIDM2LjE3NzYzMl1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIktpcmtwYXRyaWNrXCIsXG4gICAgYWRkcmVzczogXCI2MjAgU291dGggOXRoIFN0cmVldFwiLFxuICAgIGFkZHJlc3MyOiBcIk5hc2h2aWxsZSwgVE4gMzcyMDZcIixcbiAgICBwaG9uZTogXCI2MTUtODYyLTg0NTNcIixcbiAgICBtYXJrZXI6IHtcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFstODYuNzUzMDc0LCAzNi4xNjg1NDZdXG4gICAgICAgIH1cbiAgICB9XG59LCB7XG4gICAgbmFtZTogXCJMb29ieVwiLFxuICAgIGFkZHJlc3M6IFwiMjMwMSBNZXRybyBDZW50ZXIgQmx2ZC5cIixcbiAgICBhZGRyZXNzMjogXCJOYXNodmlsbGUsIFROIDM3MjI4XCIsXG4gICAgcGhvbmU6IFwiNjE1LTg2Mi04NDU0XCIsXG4gICAgbWFya2VyOiB7XG4gICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbLTg2Ljc3NDQsIDM2LjE2MjJdXG4gICAgICAgIH1cbiAgICB9XG59LCB7XG4gICAgbmFtZTogXCJNYWRpc29uXCIsXG4gICAgYWRkcmVzczogXCI1MTAgQ3VtYmVybGFuZCBBdmVudWVcIixcbiAgICBhZGRyZXNzMjogXCJNYWRpc29uLCBUTiAzNzExNVwiLFxuICAgIHBob25lOiBcIjYxNS04NjItODQ1OVwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni43MDEwMDQsIDM2LjI2NTk3M11cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIk1jRmVycmluXCIsXG4gICAgYWRkcmVzczogXCIzMTAgR3JhY2UgU3RyZWV0XCIsXG4gICAgYWRkcmVzczI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwN1wiLFxuICAgIHBob25lOiBcIjYxNS04NjItODQ1OFwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni43Njc1OTQsIDM2LjE4MjYwMV1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIk1vcmdhblwiLFxuICAgIGFkZHJlc3M6IFwiNDExIEh1bWUgU3RyZWV0XCIsXG4gICAgYWRkcmVzczI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwOFwiLFxuICAgIHBob25lOiBcIjYxNS04NjItODQ2MlwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni43OTA0ODEsIDM2LjE4MDM0MV1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIk5hcGllclwiLFxuICAgIGFkZHJlc3M6IFwiNzMgRmFpcmZpZWxkIFN0cmVldFwiLFxuICAgIGFkZHJlc3MyOiBcIk5hc2h2aWxsZSwgVE4gMzcyMTBcIixcbiAgICBwaG9uZTogXCI2MTUtMjU2LTQ0NzRcIixcbiAgICBtYXJrZXI6IHtcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFstODYuNzU2ODU1LCAzNi4xNTA3OF1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIk9sZCBIaWNrb3J5XCIsXG4gICAgYWRkcmVzczogXCIxMDUwIERvbmVsc29uIERyaXZlXCIsXG4gICAgYWRkcmVzczI6IFwiT2xkIEhpY2tvcnksIFROIDM3MTM4XCIsXG4gICAgcGhvbmU6IFwiNjE1LTg2Mi04Njk4XCIsXG4gICAgbWFya2VyOiB7XG4gICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbLTg2LjY0OTY4NSwgMzYuMjY1MzE1XVxuICAgICAgICB9XG4gICAgfVxufSwge1xuICAgIG5hbWU6IFwiUGFyYWRpc2UgUmlkZ2VcIixcbiAgICBhZGRyZXNzOiBcIjMwMDAgTW9yZ2FuIFJvYWRcIixcbiAgICBhZGRyZXNzMjogXCJKb2VsdG9uLCBUTiAzNzA4MFwiLFxuICAgIHBob25lOiBcIjYxNS04NjItODUwOVwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni44NTk2NzQsIDM2LjMzNzk2NF1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIlBhcmt3b29kXCIsXG4gICAgYWRkcmVzczogXCIzMjIwIFZhaWx2aWV3IERyaXZlXCIsXG4gICAgYWRkcmVzczI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwN1wiLFxuICAgIHBob25lOiBcIjYxNS04NjItODQ5NVwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni43NzEzNTcsIDM2LjIzNDg5OV1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIlNoZWxieVwiLFxuICAgIGFkZHJlc3M6IFwiU291dGggMjB0aCBTdCBhdCBTaGVsYnkgQXZlXCIsXG4gICAgYWRkcmVzczI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwNlwiLFxuICAgIHBob25lOiBcIjYxNS04NjItODQ2N1wiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni43MzU5NjksIDM2LjE2ODQwOF1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICBuYW1lOiBcIlNvdXRoIEluZ2xld29vZFwiLFxuICAgIGFkZHJlc3M6IFwiMTYyNCBSZWJlY2NhIFN0cmVldFwiLFxuICAgIGFkZHJlc3MyOiBcIk5hc2h2aWxsZSwgVE4gMzcyMTZcIixcbiAgICBwaG9uZTogXCI2MTUtODYyLTg0NTJcIixcbiAgICBtYXJrZXI6IHtcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFstODYuNzI3MzMzLCAzNi4xOTU0MjNdXG4gICAgICAgIH1cbiAgICB9XG59LCB7XG4gICAgbmFtZTogXCJXYXRraW5zXCIsXG4gICAgYWRkcmVzczogXCI2MTYgMTd0aCBBdmVudWUgTm9ydGhcIixcbiAgICBhZGRyZXNzMjogXCJOYXNodmlsbGUsIFROIDM3MjAzXCIsXG4gICAgcGhvbmU6IFwiNjE1LTg2Mi04NDY4XCIsXG4gICAgbWFya2VyOiB7XG4gICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbLTg2LjgwMTQsIDM2LjE2OTZdXG4gICAgICAgIH1cbiAgICB9XG59LCB7XG4gICAgbmFtZTogXCJXZXN0XCIsXG4gICAgYWRkcmVzczogXCI2MTA1IE1vcnJvdyBSb2FkXCIsXG4gICAgYWRkcmVzczI6IFwiTmFzaHZpbGxlLCBUTiAzNzIwOVwiLFxuICAgIHBob25lOiBcIjYxNS04NjItODQ2OVwiLFxuICAgIG1hcmtlcjoge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlczogWy04Ni44NjMwNTUsIDM2LjE2MzQ0Nl1cbiAgICAgICAgfVxuICAgIH1cbn1dO1xuIl19
