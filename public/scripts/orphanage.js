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

const map = L.map('mapid', options);

const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

mark();

// Functions

function mark()
{
  const lat = document.querySelector('span[data-lat]').dataset.lat;
  const lng = document.querySelector('span[data-lat]').dataset.lng;

  map.setView([lat, lng], 15);
  L.marker([lat, lng], { icon }).addTo(map);
}

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