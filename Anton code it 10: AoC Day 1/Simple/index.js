const data = require('./data.js');

const result = data.reduce((result, mass) => 
    result + Math.floor(mass / 3) - 2
, 0);

console.log(result);
