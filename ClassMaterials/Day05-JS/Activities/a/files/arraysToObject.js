const keys = ['firstName', 'lastName', 'email', 'isStudent'];

const values = [
  ['Stuart', 'Dent', 'student@ncsu.edu', true],
  ['Grace', 'Duate', 'graduate@ncsu.edu', false],
  ['Facundo', 'Ulty', 'faculty@ncsu.edu', false],
];

// Write code to convert the above arrays into an array of objects


// Print the array of objects to the console
console.log();

/* Expected output:
[
  {
    firstName: 'Stuart',
    lastName: 'Dent',
    email: 'student@ncsu.edu',
    isStudent: true
  },
  {
    firstName: 'Grace',
    lastName: 'Duate',
    email: 'graduate@ncsu.edu',
    isStudent: false
  },
  {
    firstName: 'Facundo',
    lastName: 'Ulty',
    email: 'faculty@ncsu.edu',
    isStudent: false
  }
]
*/