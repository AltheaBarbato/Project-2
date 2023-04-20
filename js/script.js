function initMap() {


  var map = new Map(document.getElementById("map"), {
    center: { lat: 35.10295383110616, lng: 33.244096104232426 },
    zoom: 8,
  });



var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'pics/icon.png'
	});

	var contentString = '<h1>IIT Perlstein Hall</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate odit optio, voluptatem placeat odio dignissimos illo magnam esse asperiores voluptas at iure vero eum, nemo aperiam? Ipsam, atque nobis rem.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);
