mapboxgl.accessToken =
  "pk.eyJ1IjoiaW1sciIsImEiOiJjanljbWowbDgwanZlM2xzOGZqcDFxbHVuIn0.niCENs8TKhS-7PSMjHFE3A";

const map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: [-99, 19], // starting position [lng, lat]
  zoom: 5 // starting zoom
});

// Add geolocate control to the map.
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: false
    },
    trackUserLocation: true
  })
);

/* map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    countries: "mx",
    mapboxgl: mapboxgl
  })
); */
const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
});

document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
