/**
 * Next Level Week #3
 * Map
 */

const map = L.map('mapid').setView([-27.2166991, -49.6471861], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

const orphanagesSpan = document.querySelectorAll('.orphanages span');

orphanagesSpan.forEach(e => {

  let data = e.dataset;

  createMarker({
    id: data.id,
    name: data.name,
    lat: data.lat,
    lng: data.lng
  });
});

function createMarker({id, name, lat, lng})
{
  let popupMeninas = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
  }).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage">  <img src="/images/arrow-white.svg"> </a>`)
  
  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popupMeninas);
}