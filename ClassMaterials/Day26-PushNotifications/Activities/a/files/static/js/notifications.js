const myName = localStorage.getItem('name');

/*****\
* GUI *
\*****/

const notifyButton = document.querySelector("#notify");
notifyButton.addEventListener("click", () => {
  // TODO
});


const btnSubscribe = document.querySelector("#subscribe");
btnSubscribe.addEventListener('click', (event) => {
  // Send the subscription details to the server
  // The existing subscriptions will be sent in case it changed
  // We're sending the name of the user to identify the subscription
  subscribeToPush(myName);
});



/********************\
* PUSH NOTIFICATIONS *
\********************/

function subscribeToPush(name) {
  // TODO
};
