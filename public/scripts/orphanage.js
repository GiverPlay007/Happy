/**
 * Next Level Week #3
 * Orphanage info
 */


 const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
 }

const map = L.map('mapid', options).setView([-27.2166991, -49.6471861], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

L.marker([-27.2166991, -49.6471861], { icon })
  .addTo(map);

  // Images

function selectImage(event)
{
  let button = event.currentTarget;
  let buttons = document.querySelectorAll('.images button');

  buttons.forEach((e) => {
    e.classList.remove('active');
  });

  let image = button.children[0];
  let container = document.querySelector(".orphanage-details > img");

  container.src = image.src;

  button.classList.add('active');
}