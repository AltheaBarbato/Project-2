  // Initialize and add the map
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.81672, lng: -87.85159 },
    zoom: 14,
  });