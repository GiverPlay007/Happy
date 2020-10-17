/*
  Next Level Week #3
  Create Orphanage Script
 */

const map = L.map('mapid').setView([-27.2166991, -49.6471861], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
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

function validate(event)
{
  if(document.querySelector('[name=lat]').value == '' || document.querySelector('[name=lng]').value == '')
  {
    event.preventDefault();
    alert('Selecione um local no mapa!');
    return;
  }

  let valid = false;

  document.querySelectorAll('.button-select button').forEach((e) => {
    if(e.classList.contains('active'))
    {
      valid = true;
    }
  });
  
  if(!valid)
  {
    event.preventDefault();
    alert('É necessário dizer se o orfanato atende em finais de semana.')
  }
}

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

function switchButtonState(event)
{
  document.querySelectorAll('.button-select button').forEach((e) => e.classList.remove('active'));

  let button = event.currentTarget;
  button.classList.add('active');

  let input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}