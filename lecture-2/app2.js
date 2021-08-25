const cities = require('./data');
let minPopulation = Infinity;
let nameOfCityMinPopulation = '';
const sum = require('./calc/sum');

cities.forEach(city => {
  if (parseInt(city.population) < minPopulation) {
    minPopulation = city.population;
    nameOfCityMinPopulation = city.name;
  }
});

console.log('Least populated city is: ' + nameOfCityMinPopulation);
console.log('With population of: ' + minPopulation);
console.log(sum(5, 4));

// 1. File-based modules (nie sami gi kreirame)
// 2. Core modules (doagjaat so nodejs)
// 3. External modules (treba da se instaliraat)