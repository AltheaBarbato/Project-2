if(document.getElementById("map")!=null) {
  let map;
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.40364, 2.17436);;
  var mapOptions = {
    center: myLocation,
    zoom:18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    maptypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: 'image/icon.png'
  });
  
  var contentString = '<h2>Greece</h2><p>so fun</p>'
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  google.maps.event.addListener(marker, 'mouseover', function(){
    infowindow.open(myMap, marker);
  });

}

google.maps.event.addDomListener(window, 'load', init);



