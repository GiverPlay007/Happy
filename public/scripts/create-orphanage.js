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

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // marker && map.removeLayer(marker);
  if(marker) marker.removeFrom(map);

  marker = L.marker([lat, lng], { icon })
            .addTo(map);

});

function addPhotoField()
{
  let container = document.querySelector("#images");
  let fieldsContainer = document.querySelectorAll('.new-upload');
  let newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

  let input = newFieldContainer.children[0];

  if(input.value == "")
  {
    return;
  }

  input.value = "";
  container.appendChild(newFieldContainer);
}

function deletePhotoField(event)
{
  let span = event.currentTarget;
  let fieldsContainer = document.querySelectorAll('.new-upload');

  if(fieldsContainer.length < 2)
  {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}