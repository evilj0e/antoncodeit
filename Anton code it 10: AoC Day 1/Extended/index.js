const data = require('./data.js');

const getFuelMass = mass => Math.floor(mass / 3) - 2;

const result = data.reduce((result, mass) => {
    let totalMass = getFuelMass(mass);
    let fuelMass = getFuelMass(spaceCraftMass);

    while(fuelMass > 0) {
        totalMass += fuelMass;
        fuelMass = getFuelMass(fuelMass);
    }

    return result + totalMass;
}, 0);

console.log(result);
