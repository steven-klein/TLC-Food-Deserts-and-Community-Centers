/**
 * get data for libraries from this page: https://library.nashville.org/locations
 * DOES NOT GET COORDINATES!!!!!
 */

 function getHTML(b, el){
     return b.querySelector(el).innerHTML.trim();
 }

 (function(document, undefined){
     var libs = document.querySelectorAll('.node-branch');
     var data = [];

     for(var i=0; i<libs.length; i++){
         var b = libs[i];
         var branch = {
             name: getHTML(b, '.heading--large a'),
             address: getHTML(b, '.thoroughfare'),
             address2: getHTML(b, '.locality') + ', ' + getHTML(b, '.state') + ' ' + getHTML(b, '.postal-code'),
             phone: getHTML(b, '.link-phone'),
             marker: {
                 type: "Feature",
                 properties: {},
                 geometry: {
                     type: "Point",
                     coordinates: [-86.719147, 36.116912]
                }

             }
         }

         data.push(branch);
     }

     console.log(libs);
     console.dir(data);
 })(document);
