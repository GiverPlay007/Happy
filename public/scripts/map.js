/**
 * Next Level Week #3
 * Map
 */

// Instantiate map 
const map = L.map('mapid').setView([-27.2166991, -49.6471861], 15);

// Create TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

// Create popup overlay
const popupMeninas = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage">  <img src="./public/images/arrow-white.svg"> </a>')


// Create marker
L.marker([-27.2166991, -49.6471861], { icon })
  .addTo(map)
  .bindPopup(popupMeninas)
  .openPopup();