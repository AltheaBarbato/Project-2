function initMap() {

var el = document.getElementById('canvas');

  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.10295383110616, lng: 33.244096104232426 },
    zoom: 8,
  });



var cyprus = new google.maps.Marker({
      position: {lat: 35.10295383110616, lng: 33.244096104232426},
      map: map,
      title: 'Where my family is from '
    });
  
    // Add an info window to the Empire State Building marker
    var cyprusInfoWindow = new google.maps.InfoWindow({
      content: '<h2>Empire State Building</h2><p>A 102-story skyscraper located in Midtown Manhattan.</p>'
    });
    cyprusInfoWindow.open(map, cyprus);
  
    // Add a button to center the map on the Statue of Liberty
    var centerButton = document.getElementById('center-btn');
    centerButton.addEventListener('click', function() {
      map.setCenter({lat: 35.10295383110616, lng: 33.244096104232426});
      map.setZoom(15);
    });
  }
