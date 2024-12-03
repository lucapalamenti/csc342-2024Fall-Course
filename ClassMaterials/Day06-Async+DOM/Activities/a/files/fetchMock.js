console.clear();

/**
 * DO NOT MODIFY THIS FUNCTION 
 */
function fetchWithCallback(URL, callback) {
  let result;
  setTimeout(() => {
      result = {body: `fetchWithCallback of ${URL}`, status: 200};
      callback(result);
  }, 5000);
  return true;
}

function onResult(result) {
  console.log("3. Fetch Result", result);
}


/**
 * ADD YOUR CODE NEXT
 */



/**
 * TEST CASE
 */

console.log('1. Work before request');

/**
 * TODO: Replace fetchWithCallback here with your new fetch function
 * and print the result using console.log("3. Fetch Result", result);
*/
fetchWithCallback('https://ncsu.edu', onResult);

console.log('2. Work after request');

/*
 * Expected output:
 * 1. Work before request
 * 2. Work after request
 * 3. Fetch Result { body: `fetch of ${URL}`, status: 200 }
 */