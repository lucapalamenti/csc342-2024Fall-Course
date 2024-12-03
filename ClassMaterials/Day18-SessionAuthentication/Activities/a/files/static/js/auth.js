import api from './APIClient.js';

function displayUserInHeader(user) {
  let link = document.createElement('a');
  link.href = '#';
  link.innerHTML = "Log Out";
  link.addEventListener("click", e => {
    e.preventDefault();
    logOut();
  })

  document.getElementById('user').textContent = `${user.first_name} ${user.last_name} (${user.username}) `;
  document.getElementById('user').appendChild(document.createElement('br'));
  document.getElementById('user').appendChild(link);
}


// YOUR CODE HERE

function logOut() {

}
