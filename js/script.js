let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 35.10295383110616, lng: 33.244096104232426 },
    zoom: 8,
  });
}

initMap();

