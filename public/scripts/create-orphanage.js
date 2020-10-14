/*
  Next Level Week #3
  Create Orphanage Script
 */

const map = L.map('mapid').setView([-27.2166991, -49.6471861], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

map.on('click', (event) => {
  
  let lat = event.latlng.lat;
  let lng = event.latlng.lng;

  // marker && map.removeLayer(marker);
  if(marker) marker.removeFrom(map);

  marker = L.marker([lat, lng], { icon })
            .addTo(map);

});