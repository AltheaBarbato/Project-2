function initMap() {


  var map = new Map(document.getElementById("map"), {
    center: { lat: 35.10295383110616, lng: 33.244096104232426 },
    zoom: 8,
  });



var empireStateBuilding = new google.maps.Marker({
      position: {lat: 35.10295383110616, lng: 33.244096104232426},
      map: map,
      title: 'Where my family is from '
    });
  
    // Add an info window to the Empire State Building marker
    var empireStateInfoWindow = new google.maps.InfoWindow({
      content: '<h2>Empire State Building</h2><p>A 102-story skyscraper located in Midtown Manhattan.</p>'
    });
    empireStateInfoWindow.open(map, empireStateBuilding);
  
    // Add a button to center the map on the Statue of Liberty
    var centerButton = document.getElementById('center-btn');
    centerButton.addEventListener('click', function() {
      map.setCenter({lat: 35.10295383110616, lng: 33.244096104232426});
      map.setZoom(15);
    });
  }
