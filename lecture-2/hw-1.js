
const cities = [
  {
    name: 'Skopje',
    population: '6'
  },
  {
    name: 'Barcelona',
    population: '4'
  },
  {
    name: 'Bilbao',
    population: '300'
  }
];

let minPopulation = Infinity;
let nameOfCityMinPopulation = '';

cities.forEach(city => {
  if (parseInt(city.population) < minPopulation) {
    minPopulation = city.population;
    nameOfCityMinPopulation = city.name;
  }
});

/**
 * prva iteracija
 * population = 6
 * min = 0
 * dali 6 > 0, ako e, min = 6
 */

console.log('Least populated city is: ' + nameOfCityMinPopulation);
console.log('With population of: ' + minPopulation);