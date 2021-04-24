// Write your function here

const areValidCredentials = (name, password) => name.length > 3 && password.length >= 8;

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true