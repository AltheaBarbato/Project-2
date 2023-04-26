
  let map;

/*async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 35.10295383110616, lng: 33.244096104232426 },
    zoom: 8,
  });

	var Map = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: { lat: 35.10295383110616, lng: 33.244096104232426 },
		map: map,
		animation: google.maps.Animation.BOUNCE,
		icon: 'pics/icon.png'
	});

	var contentString = '<h1>This is where my family is from</h1> ';

	var infowindow = new google.maps.InfoWindow({
    content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  	});

initMap();

}

google.maps.event.addDomListener(window, 'load', init);
*/

let myLocation = {lat: 35.10295383110616, lng: 33.244096104232426};

function initMap() {
	//@ts-ignore
	map = new google.maps.Map(document.getElementById("map"), {
		center: myLocation,
		zoom: 8,
	});
	
	const contentString = "<p>This is where my family is from!<p>";
	const infowindow = new google.maps.InfoWindow({
	  content: contentString,
	  ariaLabel: "Cyprus",
	});

	const marker = new google.maps.Marker({
		position: myLocation,
		map: map,
		title: 'This is where my family is from',
        icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
		},
	
	marker.addListener('mouseover`, () => {
	  inforwindow.open({
		anchor: marker, 
		map,
	});
  });
}

declare global {
	interface Window {
		initMap: () => void;
	}
}
window.initMap = initMap;
/*
cost contentString = "<p>This is where my family is from!<p>";
cost infowindo = new google.maps.InfoWindow({
	content: contentString,
	ariaLabel: "Cybrus",

marker.addListner('mouseover`, () => {
	inforwindow.open({
		anchor: marker, 
		map,
	});
});
*/
