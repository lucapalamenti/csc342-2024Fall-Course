const crypto = require('crypto');

let users = require('./data/users.json');


function getFilteredUser(user) {
  return {
    "id": user.id,
    "first_name": user.first_name,
    "last_name": user.last_name,
    "username": user.username,
    "avatar": user.avatar
  }
}


//This file mimics making asynchronous request to a database
module.exports = {
  getUserByCredentials: (username, password) => {
    // YOUR CODE HERE
  },
};
