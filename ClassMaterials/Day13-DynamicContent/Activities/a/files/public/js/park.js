import api from './APIClient_mock.js';

/**
 * Initialize leaflet map, called from HTML.
 */
function initMap(lat, lon) {
  var map = L.map('map').setView([lat, lon], 15);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);
}




/**********************************/
/*  TASK 4: DISPLAY PARK DETAILS  */
/**********************************/

// 1. Get id from URL


// 2. Retrieve park from API and display details

