
  let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
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

	var contentString = '<h1>This is where my fmaily is from</h1><p>Cyprus is a beautiful island nation located in the eastern Mediterranean, known for its stunning beaches, rich history, and warm hospitality. Visitors to Cyprus can explore ancient ruins, enjoy delicious Cypriot cuisine, and soak up the sun on pristine beaches. The island is also a popular destination for water sports enthusiasts, with plenty of opportunities for snorkeling, diving, and windsurfing. Whether you're interested in history, culture, or just relaxing in the sun, Cyprus has something for everyone. </p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});

initMap();

}

google.maps.event.addDomListener(window, 'load', init);
