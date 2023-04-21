
  let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 35.10295383110616, lng: 33.244096104232426 },
    zoom: 8,
  });


	var marker = new google.maps.Marker({
		position: { lat: 35.10295383110616, lng: 33.244096104232426 },
		map: Map,
		animation: google.maps.Animation.BOUNCE,
		icon: 'pics/icon.png'
	});

	var contentString = '<h1>This is where my family is from</h1> ';

	var infowindow = new google.maps.InfoWindow({
    content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(Map, marker);
  	});

initMap();

}

google.maps.event.addDomListener(window, 'load', init);
