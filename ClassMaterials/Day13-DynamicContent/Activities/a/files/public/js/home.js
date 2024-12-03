import api from './APIClient_mock.js';

const countiesSelect = document.querySelector('#counties-select');
countiesSelect.addEventListener('change', e => {
  updateParks()
});



/*****************************/
/*  TASK 2: COUNTY DROPDOWN  */
/*****************************/


/*******************/
/*  END OF TASK 2  */
/*******************/




function updateParks() {
  const cIndex = countiesSelect.selectedIndex;
  const countyId = countiesSelect[cIndex].value;
  api.getParksByCountyId(countyId).then(parks => {
    resetParks();
    fillParksHTML(parks);
  });
}

/**
 * Clear current parks
 */
function resetParks(parks) {
  const parkList = document.querySelector('#parks-list');
  parkList.innerHTML = '';
}

/**
 * Create all parks HTML and add them to the webpage.
 */
function fillParksHTML(parks) {
  const parkList = document.querySelector('#parks-list');
  parks.forEach(park => {
    parkList.append(createParkHTML(park));
  });

}



/******************************/
/*  TASK 3: DISPLAYING PARKS  */
/******************************/
